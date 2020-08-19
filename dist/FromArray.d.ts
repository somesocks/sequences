import { Sequence } from './types/Sequence';
/**
*
* ```javascript
*  let FromArray = require('sequences/FromArray');
*  let ToArray = require('sequences/ToArray');
*
*  // res is [1, 2, 3]:
*  let res = FromArray([ 1, 2, 3 ])
*    .pipe(ToArray)
*    .read();
* ```
* `FromArray` builds a sequence from an array.
* @name FromArray
* @param {array} values - values to return in the sequence, in order
* @returns {Sequence}
* @memberof sequences
*/
declare function FromArray<T>(this: any, array: T[]): Sequence<T>;
declare namespace FromArray {
    var prototype: any;
}
export = FromArray;
