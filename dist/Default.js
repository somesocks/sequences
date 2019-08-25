"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Sequence_1 = __importDefault(require("./Sequence"));
/**
*
* ```javascript
*  // res is [0, 10, 20, 30, 40]:
*  let res = Count()
*    .pipe(Slice, 0, 50)
*    // filter out everything, so the sequence returns END
*    .pipe(Filter, (val) => val > 9999)
*    .pipe(Default, 0)
*    .read(); // returns 0
* ```
* `Default` provides a default return value to the sequence, if the sequence terminates without returning any value
* @name Default
* @param {Sequence} source - a source sequence
* @param {function} _default - the default value
* @returns {Sequence}
* @memberof sequences
*/
function Default(source, _default) {
    var self = this instanceof Default ? this : Object.create(Default.prototype);
    self._source = source;
    self._default = _default;
    self._finished = false;
    return self;
}
Default.prototype = Object.create(Sequence_1.default.prototype);
Default.prototype.read = function read(recycle) {
    var val;
    val = this._source.read(recycle);
    if (!this._finished) {
        this._finished = true;
        val = val === this._source.END ? this._default : val;
    }
    else {
        val = val === this._source.END ? this.END : val;
    }
    return val;
};
module.exports = Default;