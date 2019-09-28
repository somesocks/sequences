"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var BaseSequence_1 = __importDefault(require("./BaseSequence"));
/**
*
* ```javascript
*  let Count = require('sequences/Count');
*  let Reduce = require('sequences/Reduce');
*  let Slice = require('sequences/Slice');
*
*  // res is 6:
*  let res = Count()
*    .pipe(Slice, 0, 4)
*    .pipe(Reduce, (state, val, i) => state + val)
*    .read();
* ```
* `Reduce` 'reduces' a sequence of elements to a single result.
* @name Reduce
* @param {Sequence} source - a source sequence
* @param {function} reduce - a reduce function
* @param {*} state - the initial value of the state
* @returns {Sequence}
* @memberof sequences
*/
function Reduce(source, reducer, state) {
    var self = this instanceof Reduce ? this : Object.create(Reduce.prototype);
    self._source = source;
    self._reducer = reducer;
    self._index = 0;
    self._state = state;
    return self;
}
Reduce.prototype = Object.create(BaseSequence_1.default.prototype);
Reduce.prototype.read = function read(recycle) {
    if (!this._source) {
        return this.END;
    }
    var val = this._source.read();
    while (val !== this._source.END) {
        this._state = this._reducer(this._state, val, this._index);
        this._index++;
        val = this._source.read(val);
    }
    var res = this._state;
    this._source = null;
    return res;
};
module.exports = Reduce;
