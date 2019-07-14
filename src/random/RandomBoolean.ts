
import { Sequence, default as BaseSequence } from '../Sequence';

import Random from './Random';

import Map from '../Map';

/**
*
* ```javascript
*
* let RandomBoolean = require('sequences/random/RandomBoolean');
**
* ```
* `RandomBoolean` is a Sequence pseudo-random number generator that returns a random boolean.
* @name RandomBoolean
* @param {number} seed - an optional 32 bit seed
* @returns {Sequence}
* @memberof sequences.random
*/
function RandomBoolean(seed ?: number) : Sequence {
	return Random(0, 1, seed)
		.pipe(Map, (x) => (x < 0.5));
}

export = RandomBoolean;
