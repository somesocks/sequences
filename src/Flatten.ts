
import { Sequence, default as BaseSequence } from './Sequence';

import Assert from './Assert';

const isBlock = function (val) { return Array.isArray(val); };

/**
*
* ```javascript
*  // res is [1, 2, 3, 4, 5, 6]:
*  let res = From([ 1, 2, 3 ], [4, 5, 6])
*    .pipe(Flatten)
*    .pipe(ToArray)
*    .read();
* ```
* `Flatten` 'flattens' a sequence of arrays into a sequence of elements.
* @name Flatten
* @param {Sequence} source - a sequence of arrays
* @returns {Sequence}
* @memberof sequences
*/
function Flatten(this : any, source : Sequence) : Sequence {
	const self = this instanceof Flatten ? this : Object.create(Flatten.prototype);

	source = Assert(source, isBlock);
	self._source = source;

	self._block = undefined;
	self._index = undefined;

	return self;
}

Flatten.prototype = Object.create(BaseSequence.prototype);

//eslint-disable-next-line no-unused-vars
Flatten.prototype.read = function read(recycle) {
	if (!this._block || this._index >= this._block.length) {
		this._block = this._source.read(this._block);
		this._index = 0;
	}

	if (this._block === this._source.END) { return this.END; }

	const val = this._block[this._index];
	this._index++;

	return val;
}

export = Flatten;
