import { Sequence } from './Sequence';
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
declare function FromArray(this: any, array: any[]): Sequence;
declare namespace FromArray {
    var prototype: any;
}
export = FromArray;
