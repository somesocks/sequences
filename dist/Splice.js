"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Sequence_1 = __importDefault(require("./Sequence"));
/**
*
* ```javascript
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
Splice.prototype = Object.create(Sequence_1.default.prototype);
Splice.prototype.read = function read(recycle) {
    while (true) {
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
