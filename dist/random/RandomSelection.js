"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var RandomInteger_1 = __importDefault(require("./RandomInteger"));
var Map_1 = __importDefault(require("../Map"));
/**
*
* ```javascript
*
* let RandomSelection = require('sequences/random/RandomSelection');
**
* ```
* `RandomSelection` is a Sequence generator that returns a random relection from the choices.
* @name RandomSelection
* @param {Array} choices - the selection choices
* @param {number} seed - an optional 32 bit seed
* @returns {Sequence}
* @memberof sequences.random
*/
function RandomSelection(choices, seed) {
    var min = 0;
    var max = choices.length - 1;
    return RandomInteger_1.default(min, max, seed)
        .pipe(Map_1.default, function (x) { return choices[x]; });
}
module.exports = RandomSelection;
