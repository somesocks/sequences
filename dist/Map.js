"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var BaseSequence_1 = __importDefault(require("./BaseSequence"));
/**
*
* ```javascript
*  let Count = require('sequences/Count');
*  let Map = require('sequences/Map');
*  let Slice = require('sequences/Slice');
*  let ToArray = require('sequences/ToArray');
*
*  // res is [1, 2, 3]:
*  let res = Count()
*    .pipe(Slice, 0, 4)
*    .pipe(Map, (val, i) => val + 1)
*    .pipe(ToArray)
*    .read();
* ```
* `Map` transforms each element in a sequence.
* @name Map
* @param {Sequence} source - a source sequence
* @param {function} map - a map function
* @returns {Sequence}
* @memberof sequences
*/
function Map(source, mapper) {
    var self = this instanceof Map ? this : Object.create(Map.prototype);
    self._source = source;
    self._map = mapper;
    self._value = undefined;
    self._index = 0;
    return self;
}
Map.prototype = Object.create(BaseSequence_1.default.prototype);
Map.prototype.read = function read(recycle) {
    this._value = this._source.read(this._value);
    if (this._value === this._source.END) {
        return this.END;
    }
    var result = this._map(this._value, this._index, recycle);
    this._index++;
    return result;
};
module.exports = Map;
