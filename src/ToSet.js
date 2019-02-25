
const Sequence = require('./Sequence');
const Assert = require('./Assert');

function isKVP(val) { return val && ('key' in val) && ('value' in val); }

/**
*
* ```javascript
* ```
* `ToSet` converts a sequence into a Set
*
* NOTE: `ToSet` will always return exactly once. If the source sequence is empty,
* `ToSet` will return an empty Set.
*
* @name ToSet
* @param {Sequence} source - the source sequence
* @returns {Sequence}
* @memberof sequences
*/
function ToSet(source) {
	const self = this instanceof ToSet ? this : Object.create(ToSet.prototype);

	self._source = source;

	return self;
}

ToSet.prototype = Object.create(Sequence.prototype);

ToSet.prototype.read = function read(recycle) {

	let val, res, loop;

	if (!this._source) { return this.END; }

	if (recycle) {
		res = recycle;
		res.clear();
	} else {
		res = new Set();
	}

	loop = (val !== this._source.END);

	while (loop) {
		val = this._source.read(val);
		if (val !== this._source.END) {
			res.add(val);
		} else {
			loop = false;
		}
	}

	this._source = null;

	return res;
}

module.exports = ToSet;
