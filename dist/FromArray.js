"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var BaseSequence_1 = __importDefault(require("./BaseSequence"));
/**
*
* ```javascript
*  let FromArray = require('sequences/FromArray');
*  let ToArray = require('sequences/ToArray');
*
*  // res is [1, 2, 3]:
*  let res = FromArray([ 1, 2, 3 ])
*    .pipe(ToArray)
*    .read();
* ```
* `FromArray` builds a sequence from an array.
* @name FromArray
* @param {array} values - values to return in the sequence, in order
* @returns {Sequence}
* @memberof sequences
*/
function FromArray(array) {
    var self = this instanceof FromArray ? this : Object.create(FromArray.prototype);
    self._array = array;
    self._index = 0;
    return self;
}
FromArray.prototype = Object.create(BaseSequence_1.default.prototype);
FromArray.prototype.read = function read(recycle) {
    if (this._index < this._array.length) {
        var res = this._array[this._index];
        this._index++;
        return res;
    }
    else {
        return this.END;
    }
};
module.exports = FromArray;
