"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var BaseSequence_1 = __importDefault(require("./BaseSequence"));
/**
*
* ```javascript
*  let From = require('sequences/From');
*  let Group = require('sequences/Group');
*  let ToArray = require('sequences/ToArray');
*
*  // res is [ [1, 2, 3], [4, 5, 6] ]:
*  let res = From(1, 2, 3, 4, 5, 6)
*    .pipe(Group, 3)
*    .pipe(ToArray)
*    .read();
* ```
* `Group` converts a sequence into a sequence of 'blocks' (fixed-size arrays of the elements)
* @name Group
* @param {Sequence} source - the source sequence
* @param {number} size - the size of blocks to emit
* @returns {Sequence}
* @memberof sequences
*/
function Group(source, size) {
    var self = this instanceof Group ? this : Object.create(Group.prototype);
    self._source = source;
    self._size = size || 1;
    return self;
}
Group.prototype = Object.create(BaseSequence_1.default.prototype);
Group.prototype.read = function read(recycle) {
    var val, res;
    val = this._source.read();
    if (val === this._source.END) {
        return this.END;
    }
    if (Array.isArray(recycle)) {
        res = recycle;
        if (res.length !== this._size) {
            res.length = this._size;
        }
    }
    else {
        res = Array(this._size);
    }
    res[0] = val;
    for (var i = 1; i < this._size; i++) {
        val = (val !== this._source.END) ? this._source.read() : val;
        if (val !== this._source.END) {
            res[i] = val;
        }
    }
    return res;
};
module.exports = Group;
