"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var FromIterator_1 = __importDefault(require("./FromIterator"));
/**
*
* ```javascript
* ```
* `FromSet` builds a sequence from a Set
* @name FromSet
* @param {Set} set - set to convert into a sequence
* @returns {Sequence}
* @memberof sequences
*/
function FromSet(set) {
    var iterator = set.values();
    return FromIterator_1.default(iterator);
}
module.exports = FromSet;
