"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var BaseSequence_1 = __importDefault(require("./BaseSequence"));
/**
*
* ```javascript
*
* let Count = require('sequences/Count');
* let Slice = require('sequences/Slice');
* let ToArray = require('sequences/ToArray');
*
* // val is [ 0, 1, 2, 3 ]
* let val = Count()
*   .pipe(Slice, 0, 4)
*   .pipe(ToArray)
*   .read();
*
*```
* `Count` is a sequence constructor that builds a sequence that counts integers upward
* `Count` never terminates, so make sure to add a terminating sequence like a `Slice` somewhere after it.
* @name Count
* @param {number} start - the number to start counting from
* @returns {Sequence}
* @memberof sequences
*/
var Count = function Count(start) {
    var self = this instanceof Count ? this : Object.create(Count.prototype);
    self._index = start || 0;
    return self;
};
Count.prototype = Object.create(BaseSequence_1.default.prototype);
Count.prototype.read = function read(recycle) {
    var val = this._index;
    this._index++;
    return val;
};
module.exports = Count;
