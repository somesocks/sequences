
import { Sequence } from './types/Sequence';
import BaseSequence from './BaseSequence';

/**
*
* ```javascript
*  let Count = require('sequences/Count');
*  let Slice = require('sequences/Slice');
*  let ToArray = require('sequences/ToArray');
*
*  // res is [1, 2, 3]:
*  let res = Count()
*    .pipe(Slice, 0, 4)
*    .pipe(ToArray)
*    .read();
* ```
* `Slice` 'slices' out a piece of a sequence to use
* @name Slice
* @param {Sequence} source - a source sequence
* @param {integer} start - the index to start from (inclusive)
* @param {integer} end - the index to end at (exclusive)
* @returns {Sequence}
* @memberof sequences
*/
function Slice<T>(this : any, source : Sequence<T>, start ?: number, end ?: number) : Sequence<T> {
	const self = this instanceof Slice ? this : Object.create(Slice.prototype);

	self._source = source;
	self._start = start || 0;
	self._end = end || 9007199254740991; // max safe int
	self._index = 0;

	return self;
}

Slice.prototype = Object.create(BaseSequence.prototype);

Slice.prototype.read = function read(recycle) {
	let val, loop;

	val = recycle;
	loop = (val !== this._source.END) && this._index < this._start;

	while(loop) {
		val = this._source.read(val);
		this._index++;
		loop = (val !== this._source.END) && this._index < this._start;
	}

	if (this._index < this._end) {
		val = this._source.read(val);
		this._index++;
		return val;
	}

	return this.END;
}

export = Slice;
