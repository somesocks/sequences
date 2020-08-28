import { Sequence } from './types/Sequence';
/**
*
* ```javascript
*
* let From = require('sequences/From');
* let ToArray = require('sequences/ToArray');
* let Window = require('sequences/Window');
*
* let isInteger = (val) => Number.isInteger(val);
*
* // val is [ [ 1, 2, 3 ], [ 2, 3, 4 ], [ 3, 4, 5 ] ]
* let val = From(1, 2, 3, 4, 5)
*   .pipe(Window, 3)
*   .pipe(ToArray)
*   .read();
*
* // val2 is [ [ 1 ], [ 1, 2 ], [ 1, 2, 3 ], [ 2, 3, 4 ], [ 3, 4, 5 ], [ 4, 5 ], [ 5 ] ]
* let val2 = From(1, 2, 3, 4, 5)
*   .pipe(Window, 3, true)
*   .pipe(ToArray)
*   .read();
*
* ```
* `Window` is a sequence wrapper that returns a fixed-length sliding window of a source sequence
* @name Window
* @param {Sequence} source - a source sequence
* @param {number} size - the size of the window buffer
* @param {boolean} edges - allow edges (a not-full buffer)
* @returns {Sequence}
* @memberof sequences
*/
declare function Window<T>(this: any, source: Sequence<T>, size: number, edges?: boolean): Sequence<T[]>;
declare namespace Window {
    var prototype: any;
}
export = Window;
