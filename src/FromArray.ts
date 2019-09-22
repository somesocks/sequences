
import { Sequence, default as BaseSequence } from './Sequence';

/**
*
* ```javascript
*  let FromArray = require('sequences/FromArray');
*  let ToArray = require('sequences/ToArray');
*
*  // res is [1, 2, 3]:
*  let res = FromArray([ 1, 2, 3 ])
*    .pipe(ToArray)
*    .read();
* ```
* `FromArray` builds a sequence from an array.
* @name FromArray
* @param {array} values - values to return in the sequence, in order
* @returns {Sequence}
* @memberof sequences
*/
function FromArray(this : any, array : any[]) : Sequence {
	const self = this instanceof FromArray ? this : Object.create(FromArray.prototype);

	self._array = array;
	self._index = 0;

	return self;
}

FromArray.prototype = Object.create(BaseSequence.prototype);

FromArray.prototype.read = function read(recycle) {
	if (this._index < this._array.length) {
		const res = this._array[this._index];
		this._index++;
		return res;
	} else {
		return this.END;
	}
}

export = FromArray;
