"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Sequence_1 = __importDefault(require("./Sequence"));
/**
 *
 * ```javascript
 *  let Join = require('sequences/Join');
 *  let ToArray = require('sequences/ToArray');
 *
 *  // res is [ [1, 4], [1, 5], [1, 6], [2, 4], [2, 5], [2, 6], [3, 4], [3, 5], [3, 6] ]:
 *  let res = Join([1, 2, 3], [4, 5, 6])
 *    .pipe(ToArray)
 *    .read();
 * ```
 * `Join` converts two arrays into a number (first array size * second array size) of pairs (arrays of two items)
 * @name Join
 * @param {Array} outerSource - first array
 * @param {Array} innerSource - second array
 * @returns {Array}
 * @memberof sequences
 */
function Join(outerSource, innerSource) {
    var self = this instanceof Join ? this : Object.create(Join.prototype);
    self._outerSource = outerSource;
    self._innerSource = innerSource;
    self._outerIndex = 0;
    self._innerIndex = 0;
    return self;
}
Join.prototype = Object.create(Sequence_1.default.prototype);
Join.prototype.read = function read(recycle) {
    var res;
    if (this._innerIndex > this._innerSource.length - 1) {
        this._innerIndex = 0;
        this._outerIndex++;
    }
    if (this._outerIndex > this._outerSource.length - 1) {
        return this.END;
    }
    if (recycle) {
        res = recycle;
    }
    else {
        res = [];
    }
    res[0] = this._outerSource[this._outerIndex];
    res[1] = this._innerSource[this._innerIndex];
    this._innerIndex++;
    return res;
};
module.exports = Join;
