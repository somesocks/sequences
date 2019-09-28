
import { Sequence } from './types/Sequence';
import BaseSequence from './BaseSequence';

/**
*
* ```javascript
*  let From = require('sequences/From');
*  let ToArray = require('sequences/ToArray');
*
*  // res is [1, 2, 3]:
*  let res = From(1, 2, 3)
*    .pipe(ToArray)
*    .read();
* ```
* `From` builds a sequence from its arguments.
* @name From
* @param {...*} values - values to return in the sequence, in order
* @returns {Sequence}
* @memberof sequences
*/
function From(this : any, ...args : any[]) : Sequence {
	var self = this instanceof From ? this : Object.create(From.prototype);

	self._array = args;
	self._index = 0;

	return self;
}

From.prototype = Object.create(BaseSequence.prototype);

From.prototype.read = function read(recycle) {
	if (this._index < this._array.length) {
		var res = this._array[this._index];
		this._index++;
		return res;
	}

	return this.END;
}

export = From;
