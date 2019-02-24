
var Sequence = require('./Sequence');

/**
*
* ```javascript
*  // res is [1, 2, 3]:
*  let res = From(1, 2, 3)
*    .pipe(ToArray)
*    .read();
* ```
* `From` builds a sequence from its arguments.
* @name From
* @param {...*} values - values to return in the sequence, in order
* @returns {Sequence}
* @memberof sequences
*/
function From() {
	var self = this instanceof From ? this : Object.create(From.prototype);

	self._array = arguments;
	self._index = 0;

	return self;
}

From.prototype = Object.create(Sequence.prototype);

From.prototype.read = function read(recycle) {
	if (this._index < this._array.length) {
		var res = this._array[this._index];
		this._index++;
		return res;
	}

	return this.END;
}

module.exports = From;
