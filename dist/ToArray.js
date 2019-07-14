"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Sequence_1 = __importDefault(require("./Sequence"));
/**
*
* ```javascript
*  // res is [1, 2, 3]:
*  let res = From(1, 2, 3)
*    .pipe(ToArray)
*    .read();
* ```
* `ToArray` converts a sequence into an array.
*
* NOTE: `ToArray` will always return exactly once. If the source sequence is empty,
* `ToArray` will return an empty array.
*
* @name ToArray
* @param {Sequence} source - the source sequence
* @returns {Sequence}
* @memberof sequences
*/
function ToArray(source) {
    var self = this instanceof ToArray ? this : Object.create(ToArray.prototype);
    self._source = source;
    return self;
}
ToArray.prototype = Object.create(Sequence_1.default.prototype);
ToArray.prototype.read = function read(recycle) {
    var val, res, loop;
    if (!this._source) {
        return this.END;
    }
    if (Array.isArray(recycle)) {
        res = recycle;
        if (res.length > 0) {
            res.length = 0;
        }
    }
    else {
        res = [];
    }
    loop = (val !== this._source.END);
    while (loop) {
        val = this._source.read(val);
        if (val !== this._source.END) {
            res.push(val);
        }
        else {
            loop = false;
        }
    }
    this._source = null;
    return res;
};
module.exports = ToArray;
