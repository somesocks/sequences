"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var BaseSequence_1 = __importDefault(require("./BaseSequence"));
var DEFAULT_ASSERT = function (val, index) { return true; };
var DEFAULT_ERROR = function (val, index) { return new Error("Assert: val " + val + " at index " + index + " failed assertion"); };
/**
*
* ```javascript
*
* let Assert = require('sequences/Assert');
* let From = require('sequences/From');
* let ToArray = require('sequences/ToArray');
*
* let isInteger = (val) => Number.isInteger(val);
*
* // val is [ 1, 2, 3, 4 ]
* let val = From(1, 2, 3, 4)
*   .pipe(Assert, isInteger)
*   .pipe(ToArray)
*   .read();
*
* // throws an assertion error
* let val2 = From(1, 2, 3, "4")
*   .pipe(Assert, isInteger)
*   .pipe(ToArray)
*   .read();
*
* ```
* `Assert` is a sequence wrapper that builds a sequence to run an assertion against every value in the sequence
* @name Assert
* @param {Sequence} source - a source sequence
* @param {function} assert - an assertion function
* @param {function} error - an error builder function
* @returns {Sequence}
* @memberof sequences
*/
function Assert(source, assert, error) {
    var self = this instanceof Assert ? this : Object.create(Assert.prototype);
    self._source = source;
    self._assert = assert || DEFAULT_ASSERT;
    self._error = error || DEFAULT_ERROR;
    self._index = 0;
    return self;
}
Assert.prototype = Object.create(BaseSequence_1.default.prototype);
Assert.prototype.read = function read(recycle) {
    var val = this._source.read(recycle);
    if (val === this._source.END) {
        return this.END;
    }
    if (!this._assert(val, this._index)) {
        throw this._error(val, this._index);
    }
    this._index++;
    return val;
};
module.exports = Assert;
