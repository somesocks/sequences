
import { Sequence, SequenceTransformer, SequenceEnd } from './types/Sequence';
import BaseSequence from './BaseSequence';

/**
*
* ```javascript
*  let Count = require('sequences/Count');
*  let Drain = require('sequences/Drain');
*  let Slice = require('sequences/Slice');
*
*  // returns sequence terminator
*  Count()
*    .pipe(Slice, 0, 4)
*    .pipe(Drain)
*    .read();
* ```
* `Drain` is a sequence constructor wraps a source sequence, and when read is called it reads the entire sequence and throws it away.
* Useful for sequences with side-effects.
* @name Drain
* @param {Sequence} source - the source sequence to drain
* @returns {Sequence}
* @memberof sequences
*/
const Drain : SequenceTransformer<SequenceEnd, any> = function Drain(this : any, source) {
	var self = this instanceof Drain ? this : Object.create(Drain.prototype);

	self._source = source;

	return self;
}

Drain.prototype = Object.create(BaseSequence.prototype);

Drain.prototype.read = function read(recycle) {
	let val, loop;

	val = recycle;
	loop = (val !== this._source.END);
	while (loop) {
		val = this._source.read(val);
		loop = (val !== this._source.END);
	}

	return this.END;
};

export = Drain;
