
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
function ToIterator<T>(this : any, source : Sequence<T>) : Sequence<Iterator<T>> {
	const self = this instanceof ToIterator ? this : Object.create(ToIterator.prototype);

	self._source = source;
  self._iterator = {
    next: function next() {
      var value = self._source.read();
      if (value === self._source.END) {
        return { done: true, value: undefined };
      } else {
        return { done: false, value };
      }
    }
  };

	return self;
}

ToIterator.prototype.read = function read() {
  const res = this._iterator;
  this._iterator = this.END;
  return res;
};

export = ToIterator;
