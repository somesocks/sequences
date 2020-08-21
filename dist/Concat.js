"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Reduce_1 = __importDefault(require("./Reduce"));
var DEFAULT_PROJECTION = function (val) { return val; };
/**
*
* ```javascript
*  let Count = require('sequences/Count');
*  let Slice = require('sequences/Slice');
*  let Concat = require('sequences/Concat');
*
*  // res is '0 - 1 - 2 - 3 - 4':
*  let res = Count()
*    .pipe(Slice, 0, 5)
*    .pipe(Concat, ' - ')
*    .read();
* ```
* `Concat` performs string concatenation of all elements in a sequence
* @name Concat
* @param {Sequence} source - a source sequence
* @param {string} separator - an optional separator string, to be placed in
* @returns {Sequence}
* @memberof sequences
*/
function Concat(source, separator) {
    if (separator === void 0) { separator = ''; }
    return Reduce_1.default(source, function (sum, val, i) { return (i === 0 ? sum + val : sum + separator + val); }, '');
}
module.exports = Concat;
