"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var BaseSequence_1 = __importDefault(require("./BaseSequence"));
/**
*
* ```javascript
* ```
* `ToSet` converts a sequence into a Set
*
* NOTE: `ToSet` will always return exactly once. If the source sequence is empty,
* `ToSet` will return an empty Set.
*
* @name ToSet
* @param {Sequence} source - the source sequence
* @returns {Sequence}
* @memberof sequences
*/
function ToSet(source) {
    var self = this instanceof ToSet ? this : Object.create(ToSet.prototype);
    self._source = source;
    return self;
}
ToSet.prototype = Object.create(BaseSequence_1.default.prototype);
ToSet.prototype.read = function read(recycle) {
    var val, res, loop;
    if (!this._source) {
        return this.END;
    }
    if (recycle) {
        res = recycle;
        res.clear();
    }
    else {
        res = new Set();
    }
    loop = (val !== this._source.END);
    while (loop) {
        val = this._source.read();
        if (val !== this._source.END) {
            res.add(val);
        }
        else {
            loop = false;
        }
    }
    this._source = null;
    return res;
};
module.exports = ToSet;
