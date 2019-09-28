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
*  let Each = require('sequences/Each');
*  let Slice = require('sequences/Slice');
*
*  // should log:
*  // element 0 is 1
*  // element 1 is 2
*  // element 2 is 3
*  Count()
*    .pipe(Slice, 1, 4)
*    .pipe(Each, (val, i) => console.log(`element ${i} is ${val}`))
*    .pipe(Drain)
*    .read();
* ```
* `Each` takes a function, and called it once per every element in a sequence.
* Useful for logging, or performing other side-effects.
* @name Each
* @param {Sequence} source - the source sequence to drain
* @param {function} each - a function to get called for each value
* @returns {Sequence}
* @memberof sequences
*/
function Each(source, each) {
    var self = this instanceof Each ? this : Object.create(Each.prototype);
    self._source = source;
    self._each = each;
    self._index = 0;
    return self;
}
Each.prototype = Object.create(BaseSequence_1.default.prototype);
Each.prototype.read = function read(recycle) {
    var val = this._source.read(recycle);
    if (val !== this._source.END) {
        this._each(val, this._index);
        this._index++;
        return val;
    }
    else {
        return this.END;
    }
};
module.exports = Each;
