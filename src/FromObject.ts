
import { Sequence } from './types/Sequence';
import BaseSequence from './BaseSequence';

import FromArray from './FromArray';

/**
*
* ```javascript
*  let FromObject = require('sequences/FromObject');
*  let ToArray = require('sequences/ToArray');
*
*  // res is [{ key: 'a', value: 1 }, { key: 'b', value: 2 }]:
*  let res = FromObject({ a: 1, b: 2 })
*    .pipe(ToArray)
*    .read();
* ```
* `FromObject` builds a sequence of key-value pairs from an object.
* @name FromObject
* @param {object} obj - object from which to return a sequence of key-value pairs
* @returns {Sequence}
* @memberof sequences
*/
function FromObject(this : any, obj : object) : Sequence { // eslint-disable-line @typescript-eslint/ban-types
	const self = this instanceof FromObject ? this : Object.create(FromObject.prototype);

  // eslint-disable-next-line @typescript-eslint/ban-types
	var entries : object[] = [];

	for (var key in obj) {
    // eslint-disable-next-line no-prototype-builtins
		if(obj.hasOwnProperty(key)) {
			var value = obj[key];
			entries.push({ key, value });
		}
	}

	return FromArray(entries);
}

export = FromObject;
