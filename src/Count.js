
var Sequence = require('./Sequence');

/**
*
* ```javascript
* 
* let Count = require('@somesocks/sequences/Count');
* let Slice = require('@somesocks/sequences/Slice');
* let ToArray = require('@somesocks/sequences/ToArray');
*
* // val is [ 0, 1, 2, 3 ]
* let val = Count()
*   .pipe(Slice, 0, 4)
*   .pipe(ToArray)
*   .read();
*
*```
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
