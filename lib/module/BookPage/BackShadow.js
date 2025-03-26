"use strict";

import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { Gradient } from '../Components/Gradient';
import { jsx as _jsx } from "react/jsx-runtime";
const colors = ['rgba(0,0,0,0.0)', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.7)'];
const rightPosition = {
  start: {
    x: 0.5,
    y: 0
  },
  end: {
    x: 1,
    y: 0
  }
};
const leftPosition = {
  start: {
    x: 0.5,
    y: 0
  },
  end: {
    x: 0,
    y: 0
  }
};
const BackShadow = ({
  degrees,
  right
}) => {
  const position = right ? rightPosition : leftPosition;

  // Using useAnimatedStyle correctly with degrees.value
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(Math.abs(degrees.value), [0, 130, 180], [1, 0.5, 0]);
    return {
      opacity
    };
  });
  return /*#__PURE__*/_jsx(Animated.View, {
    style: [{
      ...StyleSheet.absoluteFillObject,
      zIndex: 4
    }, animatedStyle],
    children: /*#__PURE__*/_jsx(Gradient, {
      ...position,
      colors: colors,
      style: {
        ...StyleSheet.absoluteFillObject
      }
    })
  });
};
export default BackShadow;
//# sourceMappingURL=BackShadow.js.map