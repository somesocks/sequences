"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var BaseSequence_1 = __importDefault(require("./BaseSequence"));
/**
*
* ```javascript
*  let From = require('sequences/From');
*  let Replace = require('sequences/Replace');
*  let ToArray = require('sequences/ToArray');
*
*  // res is [1, 1, 2, 2, 3, 3]:
*  let res = From(1, -1, 2, -2, 3, -3)
*    .pipe(Replace, (val) => val < 0, (val) => -val)
*    .pipe(ToArray)
*    .read();
* ```
* `Replace` allows you to replace some elements in a sequence dynamically.
* It acts like a mapping with a pre-selector choosing which elements to map
* @name Replace
* @param {Sequence} source - a source sequence
* @param {function} selector - the selector function, that chooses which elements to replace
* @param {function} mapper - the mapper function, that replaces the elements
* @returns {Sequence}
* @memberof sequences
*/
function Replace(source, selector, mapper) {
    var self = this instanceof Replace ? this : Object.create(Replace.prototype);
    self._source = source;
    self._selector = selector;
    self._mapper = mapper;
    self._index = 0;
    return self;
}
Replace.prototype = Object.create(BaseSequence_1.default.prototype);
Replace.prototype.read = function read(recycle) {
    var val = this._source.read(recycle);
    if (val === this._source.END) {
        return this.END;
    }
    val =
        this._selector(val, this._index) ?
            this._mapper(val, this._index) :
            val;
    this._index++;
    return val;
};
module.exports = Replace;
