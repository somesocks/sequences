
import { Sequence, default as BaseSequence } from './Sequence';

/**
*
* ```javascript
*  // should log:
*  // element 0 is 1
*  // element 1 is 2
*  // element 2 is 3
*  Count()
*    .pipe(Slice, 1, 4)
*    .pipe(Each, (val, i) => console.log(`element ${i} is ${val}`))
*    .pipe(Drain)
*    .read();
* ```
* `Each` is a sequence constructor wraps a source sequence, and when read is called it reads the entire sequence and throws it away.
* Useful for sequences with side-effects.
* @name Each
* @param {Sequence} source - the source sequence to drain
* @param {function} each - a function to get called for each value
* @returns {Sequence}
* @memberof sequences
*/
function Each(this : any, source : Sequence, each : () => any) : Sequence {
	const self = this instanceof Each ? this : Object.create(Each.prototype);

	self._source = source;
	self._each = each;
	self._index = 0;

	return self;
}

Each.prototype = Object.create(BaseSequence.prototype);

Each.prototype.read = function read(recycle) {
	const val = this._source.read(recycle);

	if (val !== this._source.END) {
		this._each(val, this._index);
		this._index++;
		return val;
	} else {
		return this.END;
	}

}

export = Each;
