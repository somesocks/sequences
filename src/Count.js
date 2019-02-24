
var Sequence = require('./Sequence');

/**
*
* ```javascript
* // array of [ 0, 1, 2, 3 ]
* const integers = Count()
*    .pipe(Slice, 0, 4)
*    .pipe(ToArray)
*    .read();
* ```
* `Count` is a sequence constructor that builds a sequence that counts integers upward
* `Count` never terminates, so make sure to add a terminating sequence like a `Slice` somewhere after it.
* @name Count
* @param {number} start - the number to start counting from
* @returns {Sequence}
* @memberof sequences
*/
function Count(start) {
	const self = this instanceof Count ? this : Object.create(Count.prototype);

	self._index = start || 0;

	return self;
}

Count.prototype = Object.create(Sequence.prototype);

Count.prototype.read = function read(recycle) {
	const val = this._index;
	this._index++;

	return val;
}

module.exports = Count;
