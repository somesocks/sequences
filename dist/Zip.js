"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var BaseSequence_1 = __importDefault(require("./BaseSequence"));
var FromArray_1 = __importDefault(require("./FromArray"));
var isArrayLike = function (val) {
    return (typeof val === 'object' && val != null) && (typeof val.length === 'number' && val.length >= 0);
};
/**
 *
 * ```javascript
 *
 *  let Zip = require('sequences/Zip');
 *  let From = require('sequences/From');
 *  let ToArray = require('sequences/ToArray');
 *
 *
 *  // res is [ [1, 4], [2, 5], [3, 6] ]:
 *  let res = Zip([1, 2, 3], [4, 5, 6])
 *    .pipe(ToArray)
 *    .read();
 *
 *
 *  // Zip takes in sequences or arrays as sources
 *  // res is [ [1, 4], [2, 5], [3, 6] ]:
 *  let res = Zip([1, 2, 3], From(4, 5, 6))
 *    .pipe(ToArray)
 *    .read();
 *
 *
 *  // the zipped sequence will be the length of the _longest_ source
 *  // if any source sequences end early, their result will be undefined
 *  // res is [ [1, 4], [2, 5], [undefined, 6] ]:
 *  let res = Zip([1, 2], [4, 5, 6])
 *    .pipe(ToArray)
 *    .read();
 *
 *
 *  // if you need to clip your results to the shortest sequence, use Zip.Short
 *  // res is [ [1, 4], [2, 5] ]:
 *  let res = Zip.Short([1, 2], [4, 5, 6])
 *    .pipe(ToArray)
 *    .read();
 *
 * ```
 * `Zip` combines any number of arrays or sequences into a single sequence of tuples of elements at the same index
 * @name Zip
 * @memberof sequences
 */
function Zip() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    var self = this instanceof Zip ? this : Object.create(Zip.prototype);
    self._sources = sources;
    for (var i = 0; i < self._sources.length; i++) {
        if (isArrayLike(self._sources[i])) {
            self._sources[i] = FromArray_1.default(self._sources[i]);
        }
    }
    return self;
}
Zip.prototype = Object.create(BaseSequence_1.default.prototype);
Zip.prototype.read = function read(recycle) {
    var result = recycle || [];
    result.length = this._sources.length;
    var hasResult = false;
    for (var i = 0; i < this._sources.length; i++) {
        var source = this._sources[i];
        var val = source.read();
        hasResult = hasResult || (val !== source.END);
        val = val !== source.END ? val : undefined;
        result[i] = val;
    }
    result = hasResult ? result : this.END;
    return result;
};
function ShortZip() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    var self = this instanceof ShortZip ? this : Object.create(ShortZip.prototype);
    self._sources = sources;
    for (var i = 0; i < self._sources.length; i++) {
        if (isArrayLike(self._sources[i])) {
            self._sources[i] = FromArray_1.default(self._sources[i]);
        }
    }
    return self;
}
ShortZip.prototype = Object.create(BaseSequence_1.default.prototype);
ShortZip.prototype.read = function read(recycle) {
    var result = recycle || [];
    result.length = this._sources.length;
    var hasResult = true;
    for (var i = 0; i < this._sources.length; i++) {
        var source = this._sources[i];
        var val = source.read();
        hasResult = hasResult && (val !== source.END);
        val = val !== source.END ? val : undefined;
        result[i] = val;
    }
    result = hasResult ? result : this.END;
    return result;
};
Zip.Short = ShortZip;
module.exports = Zip;
