import { Sequence } from '../types/Sequence';
/**
*
* ```javascript
*
* let XORShift32 = require('sequences/random/XORShift32');
**
* ```
* `XORShift32` is a Sequence implementation of the XORShift32 PRNG algorithm
* @name XORShift32
* @param {number} seed - an optional 32 bit seed
* @returns {Sequence}
* @memberof sequences.random
*/
declare function XORShift32(this: any, seed?: number): Sequence<number>;
declare namespace XORShift32 {
    var prototype: any;
}
export = XORShift32;
