
import { Sequence } from '../types/Sequence';
import BaseSequence from '../BaseSequence';

import XORShift32 from './XORShift32';

import Map from '../Map';

var CONST = Math.pow(2, -32);

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
function Random(min ?: number, max ?: number, seed ?: number) : Sequence<number> {
	const _min : number = min != null ? min : 0;
	const _max : number = max != null ? max : 1;

	return XORShift32(seed)
		.pipe<number>(Map, (x) => ((x * CONST) * (_max - _min) + _min))
}

export = Random;
