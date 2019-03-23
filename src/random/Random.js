
var Sequence = require('../Sequence');

var XORShift32 = require('./XORShift32');

var Map = require('../Map');

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
function Random(min, max, seed) {
	min = min || 0;
	max = max || 1;
	return XORShift32(seed)
		.pipe(Map, (x) => ((x * CONST) * (max - min) + min))
}

module.exports = Random;
