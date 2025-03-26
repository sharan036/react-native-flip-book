"use strict";

import React from 'react';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { Gradient } from '../Components/Gradient';
import { jsx as _jsx } from "react/jsx-runtime";
const FrontShadow = ({
  degrees,
  viewHeight,
  right
}) => {
  const colors = ['rgba(0,0,0,0.0)', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.6)'];
  const shadowWidth = 40;
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(degrees.value, [-180, -100, 0, 100, 180], [0, 0.7, 1, 0.7, 0], Extrapolate.CLAMP);
    const fix = right ? {
      right: -shadowWidth
    } : {
      left: -shadowWidth
    };
    return {
      opacity,
      width: shadowWidth,
      ...fix,
      transform: [{
        rotateY: right ? '0deg' : '180deg'
      }]
    };
  });
  const animatedStyle2 = useAnimatedStyle(() => {
    const scaleX = interpolate(degrees.value, [-150, 0, 150], [6, 1, 6], Extrapolate.CLAMP);
    return {
      transform: [{
        perspective: 1000
      }, {
        scaleX: scaleX
      }]
    };
  });
  return /*#__PURE__*/_jsx(Animated.View, {
    style: [{
      zIndex: 5000,
      height: viewHeight,
      position: 'absolute'
    }, animatedStyle],
    children: /*#__PURE__*/_jsx(Animated.View, {
      style: [{
        height: viewHeight,
        width: shadowWidth
      }, animatedStyle2],
      children: /*#__PURE__*/_jsx(Gradient, {
        start: {
          x: 1,
          y: 0
        },
        end: {
          x: 0,
          y: 0
        },
        colors: colors,
        style: [{
          flex: 1
        }]
      })
    })
  });
};
export default FrontShadow;
//# sourceMappingURL=FrontShadow.js.map