
var Sequence = require('../Sequence');

var Random = require('./Random');

var Each = require('../Each');

var Map = require('../Map');

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
function RandomBoolean(seed) {
	return Random(0, 1, seed)
		.pipe(Map, (x) => (x < 0.5));
}

module.exports = RandomBoolean;
