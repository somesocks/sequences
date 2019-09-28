import { Sequence } from './types/Sequence';
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
declare function FromObject(this: any, obj: object): Sequence;
export = FromObject;
