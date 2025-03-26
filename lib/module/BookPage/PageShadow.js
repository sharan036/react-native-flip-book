"use strict";

import React from 'react';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { Gradient } from '../Components/Gradient';
import { jsx as _jsx } from "react/jsx-runtime";
const PageShadow = ({
  degrees,
  viewHeight,
  right,
  containerSize
}) => {
  const colors = right ? ['rgba(0,0,0,0.0)', 'rgba(0,0,0,0.0)', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.6)'] : ['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.0)', 'rgba(0,0,0,0)'];
  const shadowWidth = containerSize.width * 0.02;
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(Math.abs(degrees.value), [0, 30, 55, 180], [0, 0, 1, 0]);
    return {
      opacity
    };
  });
  return /*#__PURE__*/_jsx(Animated.View, {
    style: [{
      zIndex: 2,
      height: viewHeight,
      position: 'absolute',
      width: shadowWidth
    }, right ? {
      left: -shadowWidth
    } : {
      right: -shadowWidth
    }, animatedStyle],
    children: /*#__PURE__*/_jsx(Gradient, {
      start: {
        x: 0,
        y: 0
      },
      end: {
        x: 1,
        y: 0
      },
      colors: colors,
      style: {
        flex: 1
      }
    })
  });
};
export default PageShadow;
//# sourceMappingURL=PageShadow.js.map