
import { Sequence } from './types/Sequence';
import BaseSequence from './BaseSequence';

/**
*
* ```javascript
*  let Count = require('sequences/Count');
*  let Default = require('sequences/Default');
*  let Filter = require('sequences/Filter');
*  let Slice = require('sequences/Slice');
*
*  // res is [0, 10, 20, 30, 40]:
*  let res = Count()
*    .pipe(Slice, 0, 50)
*    // filter out everything, so the sequence returns END
*    .pipe(Filter, (val) => val > 9999)
*    .pipe(Default, 0)
*    .read(); // returns 0
* ```
* `Default` provides a default return value to the sequence, if the sequence terminates without returning any value
* @name Default
* @param {Sequence} source - a source sequence
* @param {function} _default - the default value
* @returns {Sequence}
* @memberof sequences
*/
function Default(this : any, source : Sequence, _default : any) : Sequence {
	const self = this instanceof Default ? this : Object.create(Default.prototype);

	self._source = source;
	self._default = _default;
	self._finished = false;

	return self;
}

Default.prototype = Object.create(BaseSequence.prototype);

Default.prototype.read = function read(recycle) {
	let val;
	val = this._source.read(recycle);

	if (!this._finished) {
		this._finished = true;
		val = val === this._source.END ? this._default : val;
	} else {
		val = val === this._source.END ? this.END : val;
	}

	return val;
}

export = Default;
