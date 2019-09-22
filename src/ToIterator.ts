
import { Sequence, default as BaseSequence } from './Sequence';

/**
*
* ```javascript
*  let From = require('sequences/From');
*  let Map = require('sequences/Map');
*  let ToIterator = require('sequences/ToIterator');
*
*  // res is [1, 2, 3]:
*  let res = From(1, 2, 3)
*    .pipe(Map, (x) => x + 1)
*    .pipe(ToIterator);
*
*  console.log(res.next()); // { value: 2, done: false }
*
* ```
* `ToIterator` converts a sequence into an iterator, if you need one
*
* @name ToIterator
* @param {Sequence} source - the source sequence
* @returns {Iterator}
* @memberof sequences
*/
function ToIterator(this : any, source : Sequence) : Sequence {
	const self = this instanceof ToIterator ? this : Object.create(ToIterator.prototype);

	self._source = source;

	return self;
}

ToIterator.prototype.next = function next() {
	var value = this._source.read();
	if (value === this._source.END) {
		return { done: true, value: undefined };
	} else {
		return { done: false, value };
	}
};

export = ToIterator;
