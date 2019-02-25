
// const Sequence = require('./Sequence');
const FromIterator = require('./FromIterator');

/**
*
* ```javascript
* ```
* `FromSet` builds a sequence from a Set
* @name FromSet
* @param {Set} set - set to convert into a sequence
* @returns {Sequence}
* @memberof sequences
*/
function FromSet(set) {
	var iterator = set.values();

	return FromIterator(iterator);
}

module.exports = FromSet;
