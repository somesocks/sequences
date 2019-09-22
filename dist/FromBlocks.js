"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Flatten_1 = __importDefault(require("./Flatten"));
/**
*
* ```javascript
*  let From = require('sequences/From');
*  let FromBlocks = require('sequences/FromBlocks');
*  let ToArray = require('sequences/ToArray');
*
*  // res is [1, 2, 3, 4, 5, 6]:
*  let res = From([ 1, 2, 3 ], [4, 5, 6])
*    .pipe(FromBlocks)
*    .pipe(ToArray)
*    .read();
* ```
* `FromBlocks` 'flattens' a sequence of arrays into a sequence of elements.
* `FromBlocks` is a legacy alias for `Flatten`
* @name FromBlocks
* @param {Sequence} source - a sequence of arrays
* @returns {Sequence}
* @memberof sequences
*/
var FromBlocks = Flatten_1.default;
module.exports = FromBlocks;
