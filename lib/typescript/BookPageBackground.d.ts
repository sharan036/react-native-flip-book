import React from 'react';
import type { Size } from './types';
type IBookPageBackgroundProps = {
    left: string;
    right: string;
    isFirstPage: boolean;
    isLastPage: boolean;
    containerSize: Size;
    getPageStyle: (right: boolean, front: boolean) => any;
    renderPage?: (data: any) => any;
    renderLastPage?: () => any;
    shouldRenderLastPage: boolean;
};
declare const BookPageBackground: React.FC<IBookPageBackgroundProps>;
export { BookPageBackground };
//# sourceMappingURL=BookPageBackground.d.ts.map