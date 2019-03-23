
var Sequence = require('../Sequence');

var Random = require('./Random');

var Map = require('../Map');

/**
*
* ```javascript
*
* let RandomInt = require('sequences/random/RandomInt');
**
* ```
* `RandomInt` is a Sequence pseudo-random number generator that returns a random int between min and max, inclusive.
* RandomInt returns in the range [0, 1] by default.
* RandomInt has 32 bits of precision.
* @name RandomInt
* @param {number} min - the minimum possible integer to return
* @param {number} max - the maximum possible integer to return
* @param {number} seed - an optional 32 bit seed
* @returns {Sequence}
* @memberof sequences.random
*/
function RandomInt(min, max, seed) {
	min = min || 0;
	max = max || 1;
	return Random(min, max + 1, seed)
		.pipe(Map, (x) => Math.floor(x));
}

module.exports = RandomInt;
