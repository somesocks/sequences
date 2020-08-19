import { Sequence } from './types';
/**
*
* ```javascript
*  let Count = require('sequences/Count');
*  let Default = require('sequences/Default');
*  let Filter = require('sequences/Filter');
*  let Slice = require('sequences/Slice');
*
*  // res is [0, 10, 20, 30, 40]:
*  let res = Count()
*    .pipe(Slice, 0, 50)
*    // filter out everything, so the sequence returns END
*    .pipe(Filter, (val) => val > 9999)
*    .pipe(Default, 0)
*    .read(); // returns 0
* ```
* `Default` provides a default return value to the sequence, if the sequence terminates without returning any value
* @name Default
* @param {Sequence} source - a source sequence
* @param {function} _default - the default value
* @returns {Sequence}
* @memberof sequences
*/
declare function Default<T>(this: any, source: Sequence<T>, _default: T | unknown): Sequence<T>;
declare namespace Default {
    var prototype: any;
}
export = Default;
