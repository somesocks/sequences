
import { Sequence, default as BaseSequence } from './Sequence';

/**
*
* ```javascript
*  // res is [1, 2, 3]:
*  let res = From(1, 2, 3)
*    .pipe(ToArray)
*    .read();
* ```
* `ToArray` converts a sequence into an array.
*
* NOTE: `ToArray` will always return exactly once. If the source sequence is empty,
* `ToArray` will return an empty array.
*
* @name ToArray
* @param {Sequence} source - the source sequence
* @returns {Sequence}
* @memberof sequences
*/
function ToArray(this : any, source : Sequence) : Sequence {
	const self = this instanceof ToArray ? this : Object.create(ToArray.prototype);

	self._source = source;

	return self;
}

ToArray.prototype = Object.create(BaseSequence.prototype);

ToArray.prototype.read = function read(recycle) {

	let val, res, loop;

	if (!this._source) { return this.END; }

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

	this._source = null;

	return res;
}

export = ToArray;