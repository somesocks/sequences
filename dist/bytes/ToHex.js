
const Sequence = require('../Sequence');

const LOOKUP_TABLE = [];
for (let i = 0; i < 255; i++) {
  if (i < 16) {
    LOOKUP_TABLE[i] = '0' + i.toString(16).toUpperCase();
  } else {
    LOOKUP_TABLE[i] = i.toString(16).toUpperCase();
  }
}

/**
*
* ```javascript
*  // res is '000102':
*  let res = From(1, 2, 3)
*    .pipe(ToHex)
*    .read();
* ```
* `ToHex` converts a sequence into an array.
*
* NOTE: `ToHex` will always return exactly once. If the source sequence is empty,
* `ToHex` will return an empty string.
*
* @name ToHex
* @param {Sequence} source - the source sequence
* @returns {Sequence}
* @memberof sequences
*/
function ToHex(source) {
	const self = this instanceof ToHex ? this : Object.create(ToHex.prototype);

	self._source = source;

	return self;
}

ToHex.prototype = Object.create(Sequence.prototype);

ToHex.prototype.read = function read(recycle) {

	let val, loop;
	let res = '';

	if (!this._source) { return this.END; }

	loop = (val !== this._source.END);

	while (loop) {
		val = this._source.read(val);
		if (val !== this._source.END) {
			val = LOOKUP_TABLE[val];
			res += val;
		} else {
			loop = false;
		}
	}

	this._source = null;

	return res;
}

module.exports = ToHex;
