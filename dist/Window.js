"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var BaseSequence_1 = __importDefault(require("./BaseSequence"));
var Filter_1 = __importDefault(require("./Filter"));
// const _allocArr = (size) => {
//   console.log('_allocArr', size);
//   return Array(size);
// };
var _allocArr = Array;
/**
*
* ```javascript
*
* let From = require('sequences/From');
* let ToArray = require('sequences/ToArray');
* let Window = require('sequences/Window');
*
* let isInteger = (val) => Number.isInteger(val);
*
* // val is [ [ 1, 2, 3 ], [ 2, 3, 4 ], [ 3, 4, 5 ] ]
* let val = From(1, 2, 3, 4, 5)
*   .pipe(Window, 3)
*   .pipe(ToArray)
*   .read();
*
* // val2 is [ [ 1 ], [ 1, 2 ], [ 1, 2, 3 ], [ 2, 3, 4 ], [ 3, 4, 5 ], [ 4, 5 ], [ 5 ] ]
* let val2 = From(1, 2, 3, 4, 5)
*   .pipe(Window, 3, true)
*   .pipe(ToArray)
*   .read();
*
* ```
* `Window` is a sequence wrapper that returns a fixed-length sliding window of a source sequence
* @name Window
* @param {Sequence} source - a source sequence
* @param {number} size - the size of the window buffer
* @param {boolean} edges - allow edges (a not-full buffer)
* @returns {Sequence}
* @memberof sequences
*/
function Window(source, size, edges) {
    var self = this instanceof Window ? this : Object.create(Window.prototype);
    self._source = source;
    self._size = size || 1;
    self._buffer = Array(size);
    self._fillCount = 0;
    self._index = 0;
    var res = edges ? self : self.pipe(Filter_1.default, function (val) { return val.length === size; });
    return res;
}
Window.prototype = Object.create(BaseSequence_1.default.prototype);
Window.prototype.read = function read(recycle) {
    var val = this._source.read();
    if (val !== this._source.END) {
        var index = this._index % this._size;
        this._buffer[index] = val;
        this._index++;
        this._fillCount = (this._fillCount < this._size) ? this._fillCount + 1 : this._size;
    }
    else if (this._fillCount > 1) {
        this._fillCount--;
    }
    else {
        return this.END;
    }
    var res = Array.isArray(recycle) ? recycle : _allocArr(this._fillCount);
    res.length = this._fillCount;
    for (var i = 0; i < this._fillCount; i++) {
        var j = (this._index + i - this._fillCount) % this._size;
        res[i] = this._buffer[j];
    }
    return res;
};
module.exports = Window;
