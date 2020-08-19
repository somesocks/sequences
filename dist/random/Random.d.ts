import { Sequence } from '../types/Sequence';
/**
*
* ```javascript
*
* let Random = require('sequences/random/Random');
**
* ```
* `Random` is a Sequence pseudo-random number generator that returns a random number between min and max, inclusive.
* Random returns in the range [0, 1] by default.
* Random has 32 bits of precision.
* @name Random
* @param {number} min
* @param {number} max
* @param {number} seed - an optional 32 bit seed
* @returns {Sequence}
* @memberof sequences.random
*/
declare function Random(min?: number, max?: number, seed?: number): Sequence<number>;
export = Random;
