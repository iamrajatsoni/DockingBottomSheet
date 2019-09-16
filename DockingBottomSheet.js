/**
    Author: Rajat Soni
    Email: iamrajat29@gmail.com
    GitHub: https://github.com/iamrajatsoni
    npm: https://www.npmjs.com/~rajatsoni
 */
import React, { PureComponent } from 'react';
import {
  View,
  ScrollView,
  PanResponder,
  Dimensions,
  Animated,
  TouchableOpacity,
  Platform,
} from 'react-native';

const DEVICE_WIDTH = Dimensions.get( 'window' ).width;
const DEVICE_HEIGHT = Dimensions.get( 'window' ).height;
const TRANSPARENT = 'rgba(0, 0, 0, 0)'

const mainViewStyles = {
  overflow:'visible',
  flex: 1,
}

const scrollViewStyles = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  overflow:'visible',
}

export default class DockingBottomSheet extends PureComponent {
  
  static defaultProps = {
    containerStyle: { flex: 1 },
    dockHeight: 96,
    sheetExpandedTopOffset: 128,
    sheetDarknessAlpha: 0.7,
    mainViewDownScale: 0.9,
    mainContentView: () => null,
    bottomSheetContentView: () => null,
  }

  constructor( props ) {
    super( props );

    this.topSpacing = props.sheetExpandedTopOffset;
    this.viewHeight = DEVICE_HEIGHT;
    
    this.state = {
      scrollViewPointerEvents: 'none',
      pointerEventTogglerPE: null,
      scrollViewTopSpacing: DEVICE_HEIGHT,
      scrollY: new Animated.Value(0),
    }

    this.shouldDockAtBottom = true;
    this.isSystemScroll = false;

    this.setParentScrollViewRef = this.setParentScrollViewRef.bind( this );
    this.onContainerLayout = this.onContainerLayout.bind( this );
    this.parentOnScrollBeginDrag = this.parentOnScrollBeginDrag.bind( this );
    this.parentOnScrollEndDrag = this.parentOnScrollEndDrag.bind( this );
    this.parentOnMomentumScrollBegin = this.parentOnMomentumScrollBegin.bind( this );
    this.parentOnScroll = this.parentOnScroll.bind( this );

    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => false,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,
      onPanResponderGrant: (evt, gestureState) => {
        this.setState({
          scrollViewPointerEvents: null,
          pointerEventTogglerPE: 'none'
        })
      },
      onPanResponderMove: (evt, gestureState) => {
        this.setScrollValue(-gestureState.dy)
        this.doScroll(this.getScrollValue(), false)
      },
      onPanResponderRelease: (evt, gestureState) => {
        this.parentScrollVelocityYCache = gestureState.vy
        this.isSystemScroll = true

        this.parentOnScroll({
          nativeEvent: {
            velocity: { y: -gestureState.vy },
            contentOffset: { y: this.getScrollValue() }
          }
        })
      },
    });
  }

  componentDidUpdate() {
    this.calculateTopSpacing();
  }

  dockBottomSheet() {
    this.setState({
      scrollViewPointerEvents: 'none',
      pointerEventTogglerPE: null
    }, () => {
      this.doScroll(0, true);
    });
  }

  expandBottomSheet() {
    this.setState({
      scrollViewPointerEvents: null,
      pointerEventTogglerPE: 'none'
    }, () => {
      this.doScroll(this.topSpacing, true);
    });
  }

  doScroll(y, animated) {
    this.bottomSheetRef.scrollTo( {
      x: 0,
      y,
      animated,
    } );
  }

  setParentScrollViewRef( ref ) {
    this.bottomSheetRef = ref;
  }

  onContainerLayout( event ) {
    const layout = event.nativeEvent.layout;
    this.viewHeight = layout.height

    this.calculateTopSpacing();
  }

  calculateTopSpacing() {
    this.topSpacing = this.viewHeight - this.props.dockHeight - this.props.sheetExpandedTopOffset;
    const calculatedSVTopSpacing = this.getScrollViewTopSpacing();

    if (this.state.scrollViewTopSpacing !== calculatedSVTopSpacing) {
      this.setState({
        scrollViewTopSpacing: calculatedSVTopSpacing,
      })
    }
  }

  getScrollViewTopSpacing() {
    return this.viewHeight - this.props.dockHeight
  }

  parentOnScrollBeginDrag() {
    this.shouldDockAtBottom = false;
    this.isSystemScroll = false;
  }

  parentOnScrollEndDrag( evt ) {
    this.parentScrollVelocityYCache = evt.nativeEvent.velocity.y;

    if ( Math.abs( this.parentScrollVelocityYCache ) < 0.085
      && evt.nativeEvent.contentOffset.y < this.topSpacing ) { // docking at bottom

      this.doScroll(0, true);
      this.isSystemScroll = false;
      this.shouldDockAtBottom = true;
    }
  }

  parentOnMomentumScrollBegin( evt ) {
    this.isSystemScroll = true;
    if ( evt.nativeEvent.contentOffset.y > this.topSpacing ) {
      this.shouldDockAtBottom = false;
    } else {
      this.shouldDockAtBottom = true;
    }
  }

  setScrollValue(value) {
    this.state.scrollY.setValue(value)
  }

  getScrollValue() {
    return this.state.scrollY._value
  }

  parentOnScroll( evt ) {
    const { nativeEvent } = evt;
    this.setScrollValue(nativeEvent.contentOffset.y)
    
    if ( Platform.OS !== 'ios' ) {
      this.parentScrollVelocityYCache = nativeEvent.velocity.y;
    } else {
      if (nativeEvent.velocity) {        
        this.parentScrollVelocityYCache = nativeEvent.velocity.y;
      }
    }

    if ( this.isSystemScroll ) {
      if ( this.shouldDockAtBottom
          && this.parentScrollVelocityYCache < 0
          && evt.nativeEvent.contentOffset.y < this.topSpacing ) {
        this.doScroll(0, true);
        this.isSystemScroll = false;
        this.setState({
          scrollViewPointerEvents: 'none',
          pointerEventTogglerPE: null })
      } else if ( evt.nativeEvent.contentOffset.y < this.topSpacing ) {
        this.isSystemScroll = false;
        this.shouldDockAtBottom = false;
        this.doScroll(this.topSpacing, true);
      }
    }
  }

  render() {
    const scrollBgColor = this.state.scrollY.interpolate({
      inputRange: [0, this.topSpacing, DEVICE_HEIGHT],
      outputRange: [TRANSPARENT, `rgba(0, 0, 0, ${ this.props.sheetDarknessAlpha })`, `rgba(0, 0, 0, ${ this.props.sheetDarknessAlpha })`]
    });

    const mainViewScale = this.state.scrollY.interpolate({
      inputRange: [-this.topSpacing, 0, this.topSpacing],
      outputRange: [1, 1, this.props.mainViewDownScale]
    });

    return (
      <View
        style={ this.props.containerStyle }
        onLayout={ this.onContainerLayout } >
        <Animated.View
          style={ [
            mainViewStyles,
            { transform: [{ scaleX: mainViewScale }, { scaleY: mainViewScale }] },
            { paddingBottom: this.props.dockHeight }] }>
          { this.props.mainContentView() }
        </Animated.View>

        <Animated.View
          style={ [ { backgroundColor: scrollBgColor }, scrollViewStyles ] }
          pointerEvents={this.state.scrollViewPointerEvents}
        >
          <ScrollView
            bounces={ false }
            scrollsToTop={ false }
            scrollEventThrottle={ 8 }
            showsVerticalScrollIndicator={ false }
            scrollEnabled={ true }
            ref={ this.setParentScrollViewRef }
            onScrollBeginDrag={ this.parentOnScrollBeginDrag }
            onScrollEndDrag={ this.parentOnScrollEndDrag }
            onMomentumScrollBegin={ this.parentOnMomentumScrollBegin }
            onScroll={ this.parentOnScroll }
          >
            <TouchableOpacity
              onPress={() => this.dockBottomSheet()}
              style={{ height: this.state.scrollViewTopSpacing }}/>

            <View style={ { elevation:8 } }>
              { this.props.bottomSheetContentView() }
            </View>
          </ScrollView>
        </Animated.View>
        
        <View
          {...this._panResponder.panHandlers}
          pointerEvents={this.state.pointerEventTogglerPE}
          style={ {
            width: DEVICE_WIDTH,
            height: this.props.dockHeight,
            backgroundColor: '#0000',
            position: 'absolute',
            left: 0,
            bottom: 0
          } } >

        </View>
      </View>
    );
  }
}
