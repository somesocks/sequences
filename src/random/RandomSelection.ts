
import { Sequence } from '../types/Sequence';
import BaseSequence from '../BaseSequence';

import RandomInteger from './RandomInteger';

import Map from '../Map';

/**
*
* ```javascript
*
* let RandomSelection = require('sequences/random/RandomSelection');
**
* ```
* `RandomSelection` is a Sequence generator that returns a random relection from the choices.
* @name RandomSelection
* @param {Array} choices - the selection choices
* @param {number} seed - an optional 32 bit seed
* @returns {Sequence}
* @memberof sequences.random
*/
function RandomSelection<T>(choices : T[], seed ?: number) : Sequence<T> {
	var min = 0;
	var max = choices.length - 1;

	return RandomInteger(min, max, seed)
		.pipe<T>(Map, (x) => choices[x]);
}

export = RandomSelection;
