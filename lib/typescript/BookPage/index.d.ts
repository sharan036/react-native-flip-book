import React from 'react';
import type { Page, Size } from '../types';
export type IBookPageProps = {
    right: boolean;
    front: Page;
    back: Page;
    onPageFlip: any;
    containerSize: Size;
    isAnimatingRef: React.MutableRefObject<boolean>;
    setIsAnimating: (val: boolean) => void;
    isAnimating: boolean;
    enabled: boolean;
    isPressable: boolean;
    getPageStyle: (right: boolean, front: boolean) => any;
    single: boolean;
    onFlipStart?: (id: number) => void;
    onPageDragStart?: () => void;
    onPageDrag?: () => void;
    onPageDragEnd?: () => void;
    renderPage?: (data: any) => any;
};
export type BookPageInstance = {
    turnPage: () => void;
};
declare const BookPage: React.ForwardRefExoticComponent<IBookPageProps & React.RefAttributes<BookPageInstance>>;
export { BookPage };
//# sourceMappingURL=index.d.ts.map