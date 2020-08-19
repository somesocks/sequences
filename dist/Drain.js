"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var BaseSequence_1 = __importDefault(require("./BaseSequence"));
/**
*
* ```javascript
*  let Count = require('sequences/Count');
*  let Drain = require('sequences/Drain');
*  let Slice = require('sequences/Slice');
*
*  // returns sequence terminator
*  Count()
*    .pipe(Slice, 0, 4)
*    .pipe(Drain)
*    .read();
* ```
* `Drain` is a sequence constructor wraps a source sequence, and when read is called it reads the entire sequence and throws it away.
* Useful for sequences with side-effects.
* @name Drain
* @param {Sequence} source - the source sequence to drain
* @returns {Sequence}
* @memberof sequences
*/
var Drain = function Drain(source) {
    var self = this instanceof Drain ? this : Object.create(Drain.prototype);
    self._source = source;
    return self;
};
Drain.prototype = Object.create(BaseSequence_1.default.prototype);
Drain.prototype.read = function read(recycle) {
    var val, loop;
    val = recycle;
    loop = (val !== this._source.END);
    while (loop) {
        val = this._source.read(val);
        loop = (val !== this._source.END);
    }
    return this.END;
};
module.exports = Drain;
