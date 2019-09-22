
import { Sequence, default as BaseSequence } from './Sequence';

/**
*
* ```javascript
*  let Count = require('sequences/Count');
*  let Filter = require('sequences/Filter');
*  let Slice = require('sequences/Slice');
*  let ToArray = require('sequences/ToArray');
*
*  // res is [0, 10, 20, 30, 40]:
*  let res = Count()
*    .pipe(Slice, 0, 50)
*    .pipe(Filter, (val, i) => (val % 10 === 0))
*    .pipe(ToArray)
*    .read();
* ```
* `Filter` removes some items from a sequence.
* @name Filter
* @param {Sequence} source - a source sequence
* @param {function} filter - a filter function
* @returns {Sequence}
* @memberof sequences
*/
function Filter(this : any, source : Sequence, filter : (val : any) => boolean) : Sequence {
	const self = this instanceof Filter ? this : Object.create(Filter.prototype);

	self._source = source;
	self._filter = filter;
	self._index = 0;

	return self;
}

Filter.prototype = Object.create(BaseSequence.prototype);

Filter.prototype.read = function read(recycle) {

	let val, allow;

	val = this._source.read(recycle);

	allow = (val === this._source.END) || this._filter(val, this._index);

	while (!allow) {
		this._index++;
		val = this._source.read(val);
		allow = (val === this._source.END) || this._filter(val, this._index);
	}

	val = val === this._source.END ? this.END : val;

	return val;
}

export = Filter;
