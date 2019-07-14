import { Sequence } from './Sequence';
/**
*
* ```javascript
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
declare function Default(this: any, source: Sequence, _default: any): Sequence;
declare namespace Default {
    var prototype: any;
}
export = Default;
