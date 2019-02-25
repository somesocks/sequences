
const Sequence = require('./Sequence');
const Assert = require('./Assert');

function isKVP(val) { return val && ('key' in val) && ('value' in val); }

/**
*
* ```javascript
*  // res is { a: 1, b: 2 }:
*  let res = From({ key: 'a', value: 1 }, { key: 'b', value: 2 })
*    .pipe(ToObject)
*    .read();
* ```
* `ToObject` converts a sequence into an object
* The sequence must be a sequence of key-value pairs,
* structured as an object with a 'key' and a 'value' property.
*
* NOTE: `ToObject` will always return exactly once. If the source sequence is empty,
* `ToObject` will return an empty object.
*
* @name ToObject
* @param {Sequence} source - the source sequence
* @returns {Sequence}
* @memberof sequences
*/
function ToObject(source) {
	const self = this instanceof ToObject ? this : Object.create(ToObject.prototype);

	self._source = Assert(source, isKVP);

	return self;
}

ToObject.prototype = Object.create(Sequence.prototype);

ToObject.prototype.read = function read(recycle) {

	let val, res, loop;

	if (!this._source) { return this.END; }

	if (recycle) {
		res = recycle;
	} else {
		res = {};
	}

	loop = (val !== this._source.END);

	while (loop) {
		val = this._source.read(val);
		if (val !== this._source.END) {
			res[val.key] = val.value;
		} else {
			loop = false;
		}
	}

	this._source = null;

	return res;
}

module.exports = ToObject;
