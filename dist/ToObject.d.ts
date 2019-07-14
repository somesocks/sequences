import { Sequence } from './Sequence';
/**
*
* ```javascript
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
declare function ToObject(this: any, source: Sequence): Sequence;
declare namespace ToObject {
    var prototype: any;
}
export = ToObject;
