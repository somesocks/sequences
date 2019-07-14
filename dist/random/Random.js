"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var XORShift32_1 = __importDefault(require("./XORShift32"));
var Map_1 = __importDefault(require("../Map"));
var CONST = Math.pow(2, -32);
/**
*
* ```javascript
*
* let Random = require('sequences/random/Random');
**
* ```
* `Random` is a Sequence pseudo-random number generator that returns a random number between min and max, inclusive.
* Random returns in the range [0, 1] by default.
* Random has 32 bits of precision.
* @name Random
* @param {number} min
* @param {number} max
* @param {number} seed - an optional 32 bit seed
* @returns {Sequence}
* @memberof sequences.random
*/
function Random(min, max, seed) {
    var _min = min != null ? min : 0;
    var _max = max != null ? max : 1;
    return XORShift32_1.default(seed)
        .pipe(Map_1.default, function (x) { return ((x * CONST) * (_max - _min) + _min); });
}
module.exports = Random;
