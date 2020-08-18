"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var FromArray_1 = __importDefault(require("./FromArray"));
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
function FromObject(obj) {
    var self = this instanceof FromObject ? this : Object.create(FromObject.prototype);
    // eslint-disable-next-line @typescript-eslint/ban-types
    var entries = [];
    for (var key in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(key)) {
            var value = obj[key];
            entries.push({ key: key, value: value });
        }
    }
    return FromArray_1.default(entries);
}
module.exports = FromObject;
