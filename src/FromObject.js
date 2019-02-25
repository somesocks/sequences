
const Sequence = require('./Sequence');
const FromArray = require('./FromArray');

/**
*
* ```javascript
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
function FromObject(obj) {
	const self = this instanceof FromObject ? this : Object.create(FromObject.prototype);

	var entries = [];

	for (var key in obj) {
		if(obj.hasOwnProperty(key)) {
			var value = obj[key];
			entries.push({ key, value });
		}
	}

	return FromArray(entries);
}

module.exports = FromObject;
