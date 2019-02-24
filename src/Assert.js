
var Sequence = require('./Sequence');

var DEFAULT_ASSERT = function (val, index) { return true; };

var DEFAULT_ERROR = function (val, index) { return new Error(`Assert: val ${val} at index ${index} failed assertion`); };

/**
*
* ```javascript
* // works
* var integers = From(1, 2, 3, 4)
*    .pipe(Slice, 0, 10)
*    .pipe(Assert, (val, i) => Number.isInteger(val))
*    .pipe(ToArray)
*    .read();
*
* // throws error
* var integers = From(1, 2, 3, "4")
*    .pipe(Assert, (val, i) => Number.isInteger(val))
*    .pipe(ToArray)
*    .read();
* ```
* `Assert` is a sequence varructor that builds a sequence to run an assertion against every value in the sequence
* @name Assert
* @param {Sequence} source - a source sequence
* @param {function} assert - an assertion function
* @param {function} error - an error builder function
* @returns {Sequence}
* @memberof sequences
*/
function Assert(source, assert, error) {
	var self = this instanceof Assert ? this : Object.create(Assert.prototype);

	self._source = source;
	self._assert = assert || DEFAULT_ASSERT;
	self._error = error || DEFAULT_ERROR;
	self._index = 0;

	return self;
}

Assert.prototype = Object.create(Sequence.prototype);

Assert.prototype.read = function read(recycle) {
	var val = this._source.read(recycle);

	if (val === this._source.END) { return this.END; }

	if (!this._assert(val, this._index)) {
		throw this._error(val, this._index);
	}

	this._index++;

	return val;
}

module.exports = Assert;
