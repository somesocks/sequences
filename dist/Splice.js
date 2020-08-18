"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var BaseSequence_1 = __importDefault(require("./BaseSequence"));
/**
*
* ```javascript
*  let From = require('sequences/From');
*  let Splice = require('sequences/Splice');
*  let ToArray = require('sequences/ToArray');
*
*  // res is [1, 2, 3, 4, 5, 6]:
*  let res = Splice(From(1, 2, 3), From(4, 5, 6))
*    .pipe(ToArray)
*    .read();
* ```
* `Splice` 'splices' several sequences together, concatenating them into a single sequence
* @name Splice
* @param {...Sequence} sources - the source sequences
* @returns {Sequence}
* @memberof sequences
*/
function Splice() {
    var sequences = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sequences[_i] = arguments[_i];
    }
    var self = this instanceof Splice ? this : Object.create(Splice.prototype);
    self._sequences = sequences;
    self._index = 0;
    return self;
}
Splice.prototype = Object.create(BaseSequence_1.default.prototype);
Splice.prototype.read = function read(recycle) {
    // this infinite loop is a driver for a state machine
    while (true) { // eslint-disable-line no-constant-condition
        if (this._index >= this._sequences.length) {
            return this.END;
        }
        var sequence = this._sequences[this._index];
        var val = sequence.read(recycle);
        if (val === sequence.END) {
            this._index++;
        }
        else {
            return val;
        }
    }
};
module.exports = Splice;
