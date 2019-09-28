"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var BaseSequence_1 = __importDefault(require("./BaseSequence"));
/**
*
* ```javascript
*  let From = require('sequences/From');
*  let ToArray = require('sequences/ToArray');
*
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
ToArray.prototype = Object.create(BaseSequence_1.default.prototype);
ToArray.prototype.read = function read(recycle) {
    var val, res, loop;
    var index = 0;
    if (!this._source) {
        return this.END;
    }
    if (Array.isArray(recycle)) {
        res = recycle;
    }
    else {
        res = [];
    }
    loop = (val !== this._source.END);
    while (loop) {
        val = this._source.read();
        if (val !== this._source.END) {
            res[index] = val;
            index++;
        }
        else {
            loop = false;
        }
    }
    res.length = index;
    this._source = null;
    return res;
};
module.exports = ToArray;
