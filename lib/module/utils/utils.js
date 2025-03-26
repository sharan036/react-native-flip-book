"use strict";

import { runOnJS } from 'react-native-reanimated';
// Function to create pages for the flip book
export const createPages = ({
  portrait,
  singleImageMode,
  data
}) => {
  const allPages = [];
  if (portrait) {
    if (!singleImageMode) {
      data.forEach(page => {
        allPages.push({
          left: page,
          right: page
        });
        allPages.push({
          left: page,
          right: page
        });
      });
    } else {
      for (let i = 0; i < data.length; i++) {
        allPages[i] = {
          left: data[i],
          right: data[i]
        };
      }
    }
  } else {
    for (let i = 0; i < data.length; i++) {
      if (singleImageMode) {
        allPages.push({
          left: data[i],
          right: data[i + 1]
        });
        i++;
      } else {
        allPages.push({
          left: data[i],
          right: data[i]
        });
      }
    }
  }
  return allPages;
};

// Type definition for Transform styles

// Function to apply transformations with origin adjustment
export const transformOrigin = ({
  x,
  y
}, transformations) => {
  'worklet';

  // Check if transformations is an array, and ensure all items are valid transformation objects
  const validTransformations = Array.isArray(transformations) ? transformations.filter(transformation => typeof transformation === 'object') : [];
  return [{
    translateX: x
  }, {
    translateY: y
  }, ...validTransformations,
  // Add existing valid transformations here
  {
    translateX: -x
  }, {
    translateY: -y
  }];
};

// Debugging utility (runs on JS thread)
const debug = (msg, val) => {
  console.log(msg, val);
};

// Debug function with worklet support (runs on JS thread)
export const debugValue = (msg, val) => {
  'worklet';

  runOnJS(debug)(msg, val);
};

// Snap point calculation with velocity support
export const snapPoint = (value, velocity, points) => {
  'worklet';

  // Simplified: directly finding the closest snap point
  const point = value + 0.25 * velocity;
  const deltas = points.map(p => Math.abs(point - p));
  const minDelta = Math.min(...deltas);
  return points.find(p => Math.abs(point - p) === minDelta); // Non-null assertion as we are sure there's a match
};

// Clamping utility function
export function clamp(number, min, max) {
  'worklet';

  return Math.max(min, Math.min(number, max));
}
//# sourceMappingURL=utils.js.map