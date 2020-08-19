import { Sequence } from '../types/Sequence';
/**
*
* ```javascript
*  // res is '000102':
*  let res = From(1, 2, 3)
*    .pipe(ToHex)
*    .read();
* ```
* `ToHex` converts a sequence into an array.
*
* NOTE: `ToHex` will always return exactly once. If the source sequence is empty,
* `ToHex` will return an empty string.
*
* @name ToHex
* @param {Sequence} source - the source sequence
* @returns {Sequence}
* @memberof sequences.bytes
*/
declare function ToHex(this: any, source: Sequence<number>): Sequence<string>;
declare namespace ToHex {
    var prototype: any;
}
export = ToHex;
