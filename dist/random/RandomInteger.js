"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Map_1 = __importDefault(require("../Map"));
var Random_1 = __importDefault(require("./Random"));
/**
*
* ```javascript
*
* let RandomInteger = require('sequences/random/RandomInteger');
**
* ```
* `RandomInteger` is a Sequence pseudo-random number generator that returns a random int between min and max, inclusive.
* RandomInteger returns in the range [0, 1] by default.
* RandomInteger has 32 bits of precision.
* @name RandomInteger
* @param {number} min - the minimum possible integer to return
* @param {number} max - the maximum possible integer to return
* @param {number} seed - an optional 32 bit seed
* @returns {Sequence}
* @memberof sequences.random
*/
function RandomInteger(min, max, seed) {
    min = min || 0;
    max = max || 1;
    return Random_1.default(min, max + 1, seed)
        .pipe(Map_1.default, function (x) { return Math.floor(x); });
}
module.exports = RandomInteger;
