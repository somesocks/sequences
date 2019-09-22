"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var ToArray_1 = __importDefault(require("./ToArray"));
var Map_1 = __importDefault(require("./Map"));
var Flatten_1 = __importDefault(require("./Flatten"));
/**
*
* ```javascript
*  let From = require('sequences/From');
*  let Sort = require('sequences/Sort');
*  let ToArray = require('sequences/ToArray');
*
*  // res is [1, 2, 3]:
*  let res = From(3, 2, 1)
*    .pipe(Sort)
*    .pipe(ToArray)
*    .read();
* ```
* `Sort` sorts a sequence inline.
*
* NOTE: `Sort` must buffer all values in the sequence for sorting, so it has a space complexity of O(N)
*
* @name Sort
* @param {Sequence} source - the source sequence
* @returns {Sequence}
* @memberof sequences
*/
function Sort(source, comparison) {
    var mapper = function (array) { return array.sort(comparison); };
    var sequence = source
        .pipe(ToArray_1.default)
        .pipe(Map_1.default, mapper)
        .pipe(Flatten_1.default);
    return sequence;
}
module.exports = Sort;
