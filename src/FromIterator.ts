
import { Sequence } from './types/Sequence';
import BaseSequence from './BaseSequence';

type Iterator<T> = {
  next: () => ({
    done: boolean,
    value?: T
  })
}

/**
*
* ```javascript
* ```
* `FromIterator` builds a sequence from an iterator
* @name FromIterator
* @param {Iterator} iterator - iterator to convert into a sequence
* @returns {Sequence}
* @memberof sequences
*/
function FromIterator<T>(this : any, iterator : Iterator<T>) : Sequence<T> {
	const self = this instanceof FromIterator ? this : Object.create(FromIterator.prototype);

	self._source = iterator;

	return self;
}

FromIterator.prototype = Object.create(BaseSequence.prototype);

FromIterator.prototype.read = function read(recycle) {
	var val = this._source.next();
	if (val.done) {
		return this.END;
	} else {
		return val.value;
	}
};

export = FromIterator;
