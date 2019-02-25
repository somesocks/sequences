
const Sequence = require('./Sequence');

/**
*
* ```javascript
* ```
* `FromIterator` builds a sequence from an iterator
* @name FromIterator
* @param {Iterator} iterator - iterator to convert into a sequence
* @returns {Sequence}
* @memberof sequences
*/
function FromIterator(iterator) {
	const self = this instanceof FromIterator ? this : Object.create(FromIterator.prototype);

	self._source = iterator;

	return self;
}

FromIterator.prototype = Object.create(Sequence.prototype);

FromIterator.prototype.read = function read(recycle) {
	var val = this._source.next();
	if (val.done) {
		return this.END;
	} else {
		return val.value;
	}
};

module.exports = FromIterator;
