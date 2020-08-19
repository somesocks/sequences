"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var BaseSequence_1 = __importDefault(require("./BaseSequence"));
var isArrayLike = function (val) {
    return (typeof val === 'object' && val != null) && (typeof val.length === 'number' && val.length >= 0);
};
var MODE_EMPTY = 0x0;
var MODE_ARRAY = 0x1;
var MODE_SEQUENCE = 0x2;
/**
*
* ```javascript
*  let From = require('sequences/From');
*  let Flatten = require('sequences/Flatten');
*  let ToArray = require('sequences/ToArray');
*
*  // res is [1, 2, 3, 4, 5, 6]:
*  let res = From(1, [], [2, 3], From(4, 5, 6))
*    .pipe(Flatten)
*    .pipe(ToArray)
*    .read();
* ```
* `Flatten` 'flattens' a sequence of "collections" into a sequence of elements.
* right now, `Flatten` supports flattening sequences and array-like objects.
* Anything else will be passed through without modification.
* @name Flatten
* @param {Sequence} source - a sequence of arrays
* @returns {Sequence}
* @memberof sequences
*/
function Flatten(source) {
    var self = this instanceof Flatten ? this : Object.create(Flatten.prototype);
    self._source = source;
    self._mode = MODE_EMPTY;
    self._buffer = undefined;
    self._index = undefined;
    return self;
}
Flatten.prototype = Object.create(BaseSequence_1.default.prototype);
//eslint-disable-next-line no-unused-vars
Flatten.prototype.read = function read(recycle) {
    // this infinite loop is a driver for a state machine
    // eslint-disable-next-line no-constant-condition
    while (1) {
        switch (this._mode) {
            case MODE_EMPTY: {
                this._buffer = this._source.read(this._buffer);
                if (this._buffer === this._source.END) {
                    // if the source is empty, return our END signal
                    return this.END;
                }
                else if (isArrayLike(this._buffer)) {
                    // if the source is an array-like object, switch to array mode
                    this._mode = MODE_ARRAY;
                    this._index = 0;
                    break;
                }
                else if (this._buffer instanceof BaseSequence_1.default) {
                    this._mode = MODE_SEQUENCE;
                    break;
                }
                else {
                    // if the source is anything else, return it directly
                    var result = this._buffer;
                    this._buffer = null;
                    return result;
                }
            }
            case MODE_ARRAY: {
                if (this._index < this._buffer.length) {
                    // return the next element in the buffer
                    var result = this._buffer[this._index];
                    this._index++;
                    return result;
                }
                else {
                    // if array is finished, reset to 'empty' mode and loop around
                    this._mode = MODE_EMPTY;
                    break;
                }
            }
            case MODE_SEQUENCE: {
                var result = this._buffer.read();
                if (result === this._source.END) {
                    // if sequence is finished, reset to 'empty' mode and loop around
                    this._mode = MODE_EMPTY;
                    break;
                }
                else {
                    return result;
                }
            }
            default: {
                throw new Error('invalid state for sequences/Flatten');
            }
        }
    }
    //
    // while (!this._buffer || this._index >= this._buffer.length) {
    // 	this._buffer = this._source.read(this._buffer);
    // 	if (this._buffer === this._source.END) { return this.END; }
    // 	this._index = 0;
    // }
    //
    // const val = this._buffer[this._index];
    // this._index++;
    //
    // return val;
};
module.exports = Flatten;
