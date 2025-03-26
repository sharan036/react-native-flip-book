import { runOnJS } from 'react-native-reanimated';
import type { Page } from '../types';
import type { TransformsStyle } from 'react-native';

// Function to create pages for the flip book
export const createPages = ({
    portrait,
    singleImageMode,
    data,
}: {
    portrait: boolean;
    singleImageMode: boolean;
    data: string[];
}): Page[] => {
    const allPages: Page[] = [];

    if (portrait) {
        if (!singleImageMode) {
            data.forEach((page) => {
                allPages.push({
                    left: page,
                    right: page,
                });
                allPages.push({
                    left: page,
                    right: page,
                });
            });
        } else {
            for (let i = 0; i < data.length; i++) {
                allPages[i] = {
                    left: data[i],
                    right: data[i],
                };
            }
        }
    } else {
        for (let i = 0; i < data.length; i++) {
            if (singleImageMode) {
                allPages.push({
                    left: data[i],
                    right: data[i + 1],
                });
                i++;
            } else {
                allPages.push({
                    left: data[i],
                    right: data[i],
                });
            }
        }
    }
    return allPages;
};

// Type definition for Transform styles
type RNTransform = Exclude<TransformsStyle['transform'], undefined>;

// Function to apply transformations with origin adjustment
export const transformOrigin = (
    { x, y }: { x: number; y: number },
    transformations: RNTransform
): RNTransform => {
    'worklet';
    
    // Check if transformations is an array, and ensure all items are valid transformation objects
    const validTransformations = Array.isArray(transformations)
        ? transformations.filter((transformation) => typeof transformation === 'object')
        : [];

    return [
        { translateX: x },
        { translateY: y },
        ...validTransformations, // Add existing valid transformations here
        { translateX: -x },
        { translateY: -y },
    ];
};

// Debugging utility (runs on JS thread)
const debug = (msg: string, val: any) => {
    console.log(msg, val);
};

// Debug function with worklet support (runs on JS thread)
export const debugValue = (msg: string, val: any) => {
    'worklet';
    runOnJS(debug)(msg, val);
};

// Snap point calculation with velocity support
export const snapPoint = (
    value: number,
    velocity: number,
    points: ReadonlyArray<number>
): number => {
    'worklet';

    // Simplified: directly finding the closest snap point
    const point = value + 0.25 * velocity;
    const deltas = points.map((p) => Math.abs(point - p));
    const minDelta = Math.min(...deltas);

    return points.find((p) => Math.abs(point - p) === minDelta)!;
};

// Clamping utility function
export function clamp(number: number, min: number, max: number) {
    'worklet';
    return Math.max(min, Math.min(number, max));
}
