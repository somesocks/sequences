import { Sequence } from '../types/Sequence';
/**
*
* ```javascript
*
* let FromHex = require('sequences/bytes/FromHex');
**
* ```
* `FromHex` converts a hex string into a Sequence of bytes
* @name FromHex
* @param {string} hex
* @returns {Sequence}
* @memberof sequences.bytes
*/
declare function FromHex(this: any, hex: string): Sequence<number>;
declare namespace FromHex {
    var prototype: any;
}
export = FromHex;
