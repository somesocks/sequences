
import { Sequence } from './types/Sequence';
import BaseSequence from './BaseSequence';

import Assert from './Assert';

function isKVP(val) { return val && ('key' in val) && ('value' in val); }

type KVP<T = any> = {
  key: string | number,
  value: T,
};

/**
*
* ```javascript
*  let From = require('sequences/From');
*  let ToObject = require('sequences/ToObject');
*
*  // res is { a: 1, b: 2 }:
*  let res = From({ key: 'a', value: 1 }, { key: 'b', value: 2 })
*    .pipe(ToObject)
*    .read();
* ```
* `ToObject` converts a sequence into an object
* The sequence must be a sequence of key-value pairs,
* structured as an object with a 'key' and a 'value' property.
*
* NOTE: `ToObject` will always return exactly once. If the source sequence is empty,
* `ToObject` will return an empty object.
*
* @name ToObject
* @param {Sequence} source - the source sequence
* @returns {Sequence}
* @memberof sequences
*/
function ToObject<T, U = KVP<T>>(this : any, source : Sequence<U>) : Sequence<Record<string, T>> {
	const self = this instanceof ToObject ? this : Object.create(ToObject.prototype);

	self._source = Assert(source, isKVP);

	return self;
}

ToObject.prototype = Object.create(BaseSequence.prototype);

ToObject.prototype.read = function read(recycle) {

	let val, res, loop;

	if (!this._source) { return this.END; }

	if (recycle) {
		res = recycle;
	} else {
		res = {};
	}

	loop = (val !== this._source.END);

	while (loop) {
		val = this._source.read(val);
		if (val !== this._source.END) {
			res[val.key] = val.value;
		} else {
			loop = false;
		}
	}

	this._source = null;

	return res;
}

export = ToObject;
