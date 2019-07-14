
import { Sequence, default as BaseSequence } from './Sequence';

/**
*
* ```javascript
*  // res is [ [1, 2, 3], [4, 5, 6] ]:
*  let res = From(1, 2, 3, 4, 5, 6)
*    .pipe(ToBlocks, 3)
*    .pipe(ToArray)
*    .read();
* ```
* `ToBlocks` converts a sequence into a sequence of 'blocks' (fixed-size arrays of the elements)
* @name ToBlocks
* @param {Sequence} source - the source sequence
* @param {number} size - the size of blocks to emit
* @returns {Sequence}
* @memberof sequences
*/
function ToBlocks(this : any, source : Sequence, size ?: number) : Sequence {
	const self = this instanceof ToBlocks ? this : Object.create(ToBlocks.prototype);

	self._source = source;
	self._size = size || 1;

	return self;
}

ToBlocks.prototype = Object.create(BaseSequence.prototype);

ToBlocks.prototype.read = function read(recycle) {
	let val, res;

	val = this._source.read(val);
	if (val === this._source.END) { return this.END; }

	if (Array.isArray(recycle)) {
		res = recycle;
		if (res.length !== this._size) { res.length = this._size; }
	} else {
		res = Array(this._size);
	}

	res[0] = val;

	for (let i = 1; i < this._size; i++) {
		val = (val !== this._source.END) ? this._source.read(val) : val;
		if (val !== this._source.END) {
			res[i] = val;
		}
	}

	return res;
}

export = ToBlocks;
