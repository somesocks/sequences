"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Random_1 = __importDefault(require("./Random"));
var Map_1 = __importDefault(require("../Map"));
/**
*
* ```javascript
*
* let RandomBoolean = require('sequences/random/RandomBoolean');
**
* ```
* `RandomBoolean` is a Sequence pseudo-random number generator that returns a random boolean.
* @name RandomBoolean
* @param {number} seed - an optional 32 bit seed
* @returns {Sequence}
* @memberof sequences.random
*/
function RandomBoolean(seed) {
    return Random_1.default(0, 1, seed)
        .pipe(Map_1.default, function (x) { return (x < 0.5); });
}
module.exports = RandomBoolean;
