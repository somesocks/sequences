import { Sequence } from './types/Sequence';
/**
*
* ```javascript
*  let Count = require('sequences/Count');
*  let Slice = require('sequences/Slice');
*  let ToArray = require('sequences/ToArray');
*
*  // res is [1, 2, 3]:
*  let res = Count()
*    .pipe(Slice, 0, 4)
*    .pipe(ToArray)
*    .read();
* ```
* `Slice` 'slices' out a piece of a sequence to use
* @name Slice
* @param {Sequence} source - a source sequence
* @param {integer} start - the index to start from (inclusive)
* @param {integer} end - the index to end at (exclusive)
* @returns {Sequence}
* @memberof sequences
*/
declare function Slice<T>(this: any, source: Sequence<T>, start?: number, end?: number): Sequence<T>;
declare namespace Slice {
    var prototype: any;
}
export = Slice;
