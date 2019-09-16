

# docking-bottom-sheet [![NPM version](https://badge.fury.io/js/docking-bottom-sheet.svg)](https://npmjs.org/package/docking-bottom-sheet) [![Build Status](https://travis-ci.org/Rajat%20Soni/docking-bottom-sheet.svg?branch=master)](https://travis-ci.org/Rajat%20Soni/docking-bottom-sheet)
npm link: [https://www.npmjs.com/package/docking-bottom-sheet](https://www.npmjs.com/package/docking-bottom-sheet)
Demo link: [https://github.com/iamrajatsoni/DockingBottomSheet/tree/master/demo](https://github.com/iamrajatsoni/DockingBottomSheet/tree/master/demo)

<img align="right" src="https://cdn-images-1.medium.com/max/1600/1*6r_ovW9OgoEdLxjSNuZTiA.gif" alt="DockingBottomSheet" hspace="24px" z-index="7"/>

> DockingBottomSheet offers a React Native component that takes in 2 types of content views as props.
> One is Main content view and the other is Bottom-Sheet content view. Initially Main view is the active view when Bottom-Sheet is docked at the bottom. It can also be expanded and docked at the top by dragging or using function `expandBottomSheet()`. Once expanded, `dockBottomSheet()` function can be used to programmatically dock the rendered bottom-sheet. Various other props are exposed that can be used to customise `DockingBottomSheet` depending on one's requirement.
>

## Installation
```sh
$ npm i docking-bottom-sheet
```

## Import and Basic Usage
__Import__
```js
import DockingBottomSheet from 'docking-bottom-sheet'
```
```js
var DockingBottomSheet = require('docking-bottom-sheet');
```

__Basic Usage__
```jsx
<DockingBottomSheet
    ref={ (bottomSheetRef)=> this.bottomSheetRef = bottomSheetRef }
    containerStyle={ <style object> }
    dockHeight={ <number> }
    sheetExpandedTopOffset={ <number> }
    sheetDarknessAlpha={ <float (0 to 1)> }
    mainViewDownScale={ <float (0 to 1)> }
    mainContentView={ <function that returns UI elements> }
    bottomSheetContentView={ <function that returns UI elements> }
/>
```

## Props
* __containerStyle__ [Object]: Styling for `View` that holds `main-view` and `bottom-sheet` views. `default: { flex: 1 }`

* __dockHeight__ [Number]: Visible height of `bottom-sheet` when it is docked at the bottom. `default: 96`

* __sheetExpandedTopOffset__ [Number]: Top-offset of `bottom-sheet` in its expanded state. `default: 128`

* __sheetDarknessAlpha__ [Float]: The final background darkness alpha of `bottom-sheet` when its completely expanded. `default: 0.7`

* __mainViewDownScale__ [Float]: The final scale-down value of View `[main-view]` behind `bottom-sheet` scales down when its completely expanded. `default: 0.9`

* __mainContentView__ [Function]: Function that returns View`[main-view]` to be rendered behind `bottom-sheet`. `default: () =>  null`

* __bottomSheetContentView__ [Function]: Function that returns View to be rendered as `bottom-sheet` [Note: the bottom-sheet itself is a scroll-view so do not pass scroll-view as parent view-element to this prop]. `default: () =>  null`

## Functions
* __expandBottomSheet()__: Used to programmatically expand `bottom-sheet`. `eg. bottomSheetRef.expandBottomSheet()`

* __dockBottomSheet()__: Used to programmatically dock `bottom-sheet` at the bottom. `eg. bottomSheetRef.dockBottomSheet()`
 
## Note
* Bottom-Sheet's parent is a React Native ScrollView, hence avoid passing ScrollView as root component to prop `bottomSheetContentView`.

## License
MIT © [Rajat Soni](https://www.npmjs.com/~rajatsoni)
