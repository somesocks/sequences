
import { Sequence } from '../types/Sequence';
import BaseSequence from '../BaseSequence';

import Map from '../Map';

import Random from './Random';

/**
*
* ```javascript
*
* let RandomInteger = require('sequences/random/RandomInteger');
**
* ```
* `RandomInteger` is a Sequence pseudo-random number generator that returns a random int between min and max, inclusive.
* RandomInteger returns in the range [0, 1] by default.
* RandomInteger has 32 bits of precision.
* @name RandomInteger
* @param {number} min - the minimum possible integer to return
* @param {number} max - the maximum possible integer to return
* @param {number} seed - an optional 32 bit seed
* @returns {Sequence}
* @memberof sequences.random
*/
function RandomInteger(min ?: number, max ?: number, seed ?: number) : Sequence {
	min = min || 0;
	max = max || 1;
	return Random(min, max + 1, seed)
		.pipe(Map, (x) => Math.floor(x));
}

export = RandomInteger;
