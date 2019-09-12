/**
 * @format
 */

import { Dimensions } from 'react-native';
import DockingBottomSheet from './DockingBottomSheet'
/**
    Author: Rajat Soni
    email: iamrajat29@gmail.com
    @flow
 */
import React, { PureComponent } from 'react';
import {
  View,
  ScrollView,
  Button,
} from 'react-native';

const deviceWidth = Dimensions.get( 'window' ).width;

export default class Home extends PureComponent {

  render() {
    return (
      <View style={ { flex: 1 } }>
          <View style={ { flex: 1, backgroundColor: '#EEE' } }>
            <DockingBottomSheet
                dockHeight={ 96 }
                topSpacing={ 128 }
                darknessLimit={ 0.7 }
                scaleLimit={ 0.9 }
                mainContentView={ this.renderMainViewData }
                bottomSheetContentView={ this.renderSVContent }
            />
          </View>
      </View>
    );
  }

  // MAIN VIEW DATA

  renderMainViewData() {
    return(
      <View>
        <ScrollView>
          {renderBlock(1, 50)}
          {renderBlock(4, 100)}
          {renderBlock(3, 150)}

          <View style={{height: 16}} />
          <Button
            onPress={()=>{console.warn('clicked')}}
            title="Click Me!"
            color="#999"
            accessibilityLabel="Learn more about this purple button"
          />
          
          {renderBlock(1, 150)}
          {renderBlock(4, 50)}
          {renderBlock(2, 100)}

          <View style={{height: 16}} />
          <Button
            onPress={()=>{console.warn('clicked')}}
            title="Click Me Too!"
            color="#999"
            accessibilityLabel="Learn more about this purple button"
          />

          {renderBlock(7, 50)}
          {renderBlock(2, 100)}
          {renderBlock(3, 100)}
          {renderBlock(1, 50)}
          {renderBlock(4, 100)}
          {renderBlock(3, 150)}

          <View style={{height: 16}} />
          <Button
            onPress={()=>{console.warn('clicked')}}
            title="Click Me!"
            color="#999"
            accessibilityLabel="Learn more about this purple button"
          />

          {renderBlock(1, 150)}
          {renderBlock(4, 50)}
          {renderBlock(2, 100)}

          <View style={{height: 16}} />
          <Button
            onPress={()=>{console.warn('clicked')}}
            title="Click Me Too!"
            color="#999"
            accessibilityLabel="Learn more about this purple button"
          />

          {renderBlock(7, 50)}
          {renderBlock(2, 100)}
          {renderBlock(3, 100)}

          {renderBlock(1, 50)}
          {renderBlock(4, 100)}
          {renderBlock(3, 150)}

          <View style={{height: 16}} />
          <Button
            onPress={()=>{console.warn('clicked')}}
            title="Click Me!"
            color="#999"
            accessibilityLabel="Learn more about this purple button"
          />

          {renderBlock(1, 150)}
          {renderBlock(4, 50)}
          {renderBlock(2, 100)}

          <View style={{height: 16}} />
          <Button
            onPress={()=>{console.warn('clicked')}}
            title="Click Me Too!"
            color="#999"
            accessibilityLabel="Learn more about this purple button"
          />

          {renderBlock(7, 50)}
          {renderBlock(2, 100)}
          {renderBlock(3, 100)}

          <View style={{height: 16}} />
      </ScrollView>
      </View>
    )
  }


  // SCROLL VIEW DATA

  renderSVContent() {
    return (
      <View style={{backgroundColor: '#333'}}>
        {renderBlock(1, 68, '#666')}
        {renderBlock(10, 20, '#666')}
        {renderBlock(4, 50, '#666')}
        {renderBlock(1, 100, '#666')}

        <View style={{height: 16}} />
        <Button
          onPress={()=>{console.warn('clicked')}}
          title="Click Me!!"
          color="#666"
          accessibilityLabel="Learn more about this purple button"
        />
        
        {renderBlock(1, 100, '#666')}
        {renderBlock(4, 50, '#666')}
        {renderBlock(2, 100, '#666')}

        <View style={{height: 16}} />
        <Button
          onPress={()=>{console.warn('clicked')}}
          title="Click Me Too!!"
          color="#666"
          accessibilityLabel="Learn more about this purple button"
        />

        {renderBlock(7, 50, '#666')}
        {renderBlock(2, 100, '#666')}
        {renderBlock(3, 100, '#666')}

        <View style={{height: 16}} />
        {renderBlock(1, 68, '#666')}
        {renderBlock(10, 20, '#666')}
        {renderBlock(4, 50, '#666')}
        {renderBlock(1, 100, '#666')}

        <View style={{height: 16}} />
        <Button
          onPress={()=>{console.warn('clicked')}}
          title="Click Me!!"
          color="#666"
          accessibilityLabel="Learn more about this purple button"
        />
        
        {renderBlock(1, 100, '#666')}
        {renderBlock(4, 50, '#666')}
        {renderBlock(2, 100, '#666')}

        <View style={{height: 16}} />
        <Button
          onPress={()=>{console.warn('clicked')}}
          title="Click Me Too!!"
          color="#666"
          accessibilityLabel="Learn more about this purple button"
        />

        {renderBlock(7, 50, '#666')}
        {renderBlock(2, 100, '#666')}
        {renderBlock(3, 100, '#666')}

        <View style={{height: 16}} />
        {renderBlock(1, 68, '#666')}
        {renderBlock(10, 20, '#666')}
        {renderBlock(4, 50, '#666')}
        {renderBlock(1, 100, '#666')}

        <View style={{height: 16}} />
        <Button
          onPress={()=>{console.warn('clicked')}}
          title="Click Me!!"
          color="#666"
          accessibilityLabel="Learn more about this purple button"
        />
        
        {renderBlock(1, 100, '#666')}
        {renderBlock(4, 50, '#666')}
        {renderBlock(2, 100, '#666')}

        <View style={{height: 16}} />
        <Button
          onPress={()=>{console.warn('clicked')}}
          title="Click Me Too!!"
          color="#666"
          accessibilityLabel="Learn more about this purple button"
        />

        {renderBlock(7, 50, '#666')}
        {renderBlock(2, 100, '#666')}
        {renderBlock(3, 100, '#666')}

        <View style={{height: 16}} />
        {renderBlock(1, 68, '#666')}
        {renderBlock(10, 20, '#666')}
        {renderBlock(4, 50, '#666')}
        {renderBlock(1, 100, '#666')}

        <View style={{height: 16}} />
        <Button
          onPress={()=>{console.warn('clicked')}}
          title="Click Me!!"
          color="#666"
          accessibilityLabel="Learn more about this purple button"
        />
        
        {renderBlock(1, 100, '#666')}
        {renderBlock(4, 50, '#666')}
        {renderBlock(2, 100, '#666')}

        <View style={{height: 16}} />
        <Button
          onPress={()=>{console.warn('clicked')}}
          title="Click Me Too!!"
          color="#666"
          accessibilityLabel="Learn more about this purple button"
        />

        {renderBlock(7, 50, '#666')}
        {renderBlock(2, 100, '#666')}
        {renderBlock(3, 100, '#666')}

        <View style={{height: 16}} />
        {renderBlock(1, 68, '#666')}
        {renderBlock(10, 20, '#666')}
        {renderBlock(4, 50, '#666')}
        {renderBlock(1, 100, '#666')}

        <View style={{height: 16}} />
        <Button
          onPress={()=>{console.warn('clicked')}}
          title="Click Me!!"
          color="#666"
          accessibilityLabel="Learn more about this purple button"
        />
        
        {renderBlock(1, 100, '#666')}
        {renderBlock(4, 50, '#666')}
        {renderBlock(2, 100, '#666')}

        <View style={{height: 16}} />
        <Button
          onPress={()=>{console.warn('clicked')}}
          title="Click Me Too!!"
          color="#666"
          accessibilityLabel="Learn more about this purple button"
        />

        {renderBlock(7, 50, '#666')}
        {renderBlock(2, 100, '#666')}
        {renderBlock(3, 100, '#666')}

        <View style={{height: 16}} />
        {renderBlock(1, 68, '#666')}
        {renderBlock(10, 20, '#666')}
        {renderBlock(4, 50, '#666')}
        {renderBlock(1, 100, '#666')}

        <View style={{height: 16}} />
        <Button
          onPress={()=>{console.warn('clicked')}}
          title="Click Me!!"
          color="#666"
          accessibilityLabel="Learn more about this purple button"
        />
        
        {renderBlock(1, 100, '#666')}
        {renderBlock(4, 50, '#666')}
        {renderBlock(2, 100, '#666')}

        <View style={{height: 16}} />
        <Button
          onPress={()=>{console.warn('clicked')}}
          title="Click Me Too!!"
          color="#666"
          accessibilityLabel="Learn more about this purple button"
        />

        {renderBlock(7, 50, '#666')}
        {renderBlock(2, 100, '#666')}
        {renderBlock(3, 100, '#666')}

        <View style={{height: 16}} />
      </View>
    )
  }

}

const renderBlock = function(count, height, bgColor) {
  const spacing = 16;
  const arr = []
  
  for (let i = 0; i < count; i++) {
    arr.push(i)
  }

  const blockWidth = (deviceWidth - spacing * 2 - (count - 1) * spacing)/count

  return  (
    <View
        style={{
          flexDirection: 'row',
          marginLeft: spacing,
          marginRight: spacing,
          marginTop: spacing,
          justifyContent: 'space-between'
        }}
      >
        {
          arr.map((_, index )=>{
            return (
              <View
                key={`${count} ${index}`}
                style={{
                  backgroundColor: bgColor || '#CCC',
                  width: blockWidth,
                  height,
                }}
              />
            )
          })
        }
      </View>
  )
}
