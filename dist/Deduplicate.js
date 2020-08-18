"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Filter_1 = __importDefault(require("./Filter"));
var DEFAULT_PROJECTION = function (val) { return val; };
/**
*
* ```javascript
*  let Count = require('sequences/Count');
*  let Deduplicate = require('sequences/Deduplicate');
*  let Map = require('sequences/Map');
*  let Slice = require('sequences/Slice');
*  let ToArray = require('sequences/ToArray');
*
*  // res is [0, 1, 2, 3]:
*  let res = Count()
*    .pipe(Slice, 0, 50)
*    .pipe(Map, (val) => val % 4)
*    .pipe(Deduplicate)
*    .pipe(ToArray)
*    .read();
* ```
* `Deduplicate` removes duplicates from a sequence, while maintaining sequence order
* NOTE: `Deduplicate` uses a Set to track already-seen elements,
* so it can potentially use a large amount of memory
* @name Deduplicate
* @param {Sequence} source - a source sequence
* @param {function} projection - an optional projection function, that you can use to deduplicate based off some part of values
* @returns {Sequence}
* @memberof sequences
*/
function Deduplicate(source, projection) {
    if (projection === void 0) { projection = DEFAULT_PROJECTION; }
    var _filterSet = new Set();
    var filter = function (val) {
        val = projection(val);
        if (_filterSet.has(val)) {
            return false;
        }
        else {
            _filterSet.add(val);
            return true;
        }
    };
    return Filter_1.default(source, filter);
}
module.exports = Deduplicate;
