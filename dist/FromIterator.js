"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var BaseSequence_1 = __importDefault(require("./BaseSequence"));
/**
*
* ```javascript
* ```
* `FromIterator` builds a sequence from an iterator
* @name FromIterator
* @param {Iterator} iterator - iterator to convert into a sequence
* @returns {Sequence}
* @memberof sequences
*/
function FromIterator(iterator) {
    var self = this instanceof FromIterator ? this : Object.create(FromIterator.prototype);
    self._source = iterator;
    return self;
}
FromIterator.prototype = Object.create(BaseSequence_1.default.prototype);
FromIterator.prototype.read = function read(recycle) {
    var val = this._source.next();
    if (val.done) {
        return this.END;
    }
    else {
        return val.value;
    }
};
module.exports = FromIterator;
