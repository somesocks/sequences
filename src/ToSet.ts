
import { Sequence } from './types/Sequence';
import BaseSequence from './BaseSequence';

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
function ToSet(this : any, source : Sequence) : Sequence {
	const self = this instanceof ToSet ? this : Object.create(ToSet.prototype);

	self._source = source;

	return self;
}

ToSet.prototype = Object.create(BaseSequence.prototype);

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
		val = this._source.read();
		if (val !== this._source.END) {
			res.add(val);
		} else {
			loop = false;
		}
	}

	this._source = null;

	return res;
}

export = ToSet;
