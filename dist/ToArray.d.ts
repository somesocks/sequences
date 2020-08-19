import { Sequence } from './types/Sequence';
/**
*
* ```javascript
*  let From = require('sequences/From');
*  let ToArray = require('sequences/ToArray');
*
*  // res is [1, 2, 3]:
*  let res = From(1, 2, 3)
*    .pipe(ToArray)
*    .read();
* ```
* `ToArray` converts a sequence into an array.
*
* NOTE: `ToArray` will always return exactly once. If the source sequence is empty,
* `ToArray` will return an empty array.
*
* @name ToArray
* @param {Sequence} source - the source sequence
* @returns {Sequence}
* @memberof sequences
*/
declare function ToArray<T>(this: any, source: Sequence<T>): Sequence<T[]>;
declare namespace ToArray {
    var prototype: any;
}
export = ToArray;
