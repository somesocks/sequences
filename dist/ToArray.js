
const Sequence = require('./Sequence');

/**
*
* ```javascript
*  // res is [1, 2, 3]:
*  let res = From(1, 2, 3)
*    .pipe(ToArray)
*    .read();
* ```
* `ToArray` converts a sequence into an array
* @name ToArray
* @param {Sequence} source - the source sequence
* @returns {Sequence}
* @memberof sequences
*/
function ToArray(source) {
	const self = this instanceof ToArray ? this : Object.create(ToArray.prototype);

	self._source = source;

	return self;
}

ToArray.prototype = Object.create(Sequence.prototype);

ToArray.prototype.read = function read(recycle) {
	let val, res, loop;

	if (!this.source) { return this.END; }

	if (Array.isArray(recycle)) {
		res = recycle;
		if (res.length > 0) { res.length = 0; }
	} else {
		res = [];
	}

	loop = (val !== this._source.END);

	while (loop) {
		val = this._source.read(val);
		if (val !== this._source.END) {
			res.push(val)
		} else {
			loop = false;
		}
	}

	if (res.length === 0) {
		this._source = null;
	}

	return res;
}

module.exports = ToArray;
