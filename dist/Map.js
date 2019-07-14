"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Sequence_1 = __importDefault(require("./Sequence"));
/**
*
* ```javascript
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
    self._index = 0;
    return self;
}
Map.prototype = Object.create(Sequence_1.default.prototype);
Map.prototype.read = function read(recycle) {
    var val = this._source.read(recycle);
    if (val !== this._source.END) {
        val = this._map(val, this._index);
        this._index++;
    }
    return val;
};
module.exports = Map;
