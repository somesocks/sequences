
var Sequence = require('../Sequence');

var RandomInt = require('./RandomInt');

var Map = require('../Map');

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
function RandomSelection(choices, seed) {
	var min = 0;
	var max = choices.length - 1;

	return RandomInt(min, max, seed)
		.pipe(Map, (x) => choices[x]);
}

module.exports = RandomSelection;
