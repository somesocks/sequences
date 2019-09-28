"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var BaseSequence_1 = __importDefault(require("../BaseSequence"));
/**
*
* ```javascript
*
* let FromHex = require('sequences/bytes/FromHex');
**
* ```
* `FromHex` converts a hex string into a Sequence of bytes
* @name FromHex
* @param {string} hex
* @returns {Sequence}
* @memberof sequences.bytes
*/
function FromHex(hex) {
    var self = this instanceof FromHex ? this : Object.create(FromHex.prototype);
    self._hex = hex;
    self._offset = 0;
    return self;
}
FromHex.prototype = Object.create(BaseSequence_1.default.prototype);
FromHex.prototype.read = function read(recycle) {
    var byte = 0;
    if (this._offset >= this._hex.length) {
        return this.END;
    }
    var char;
    char = this._hex[this._offset];
    this._offset++;
    switch (char) {
        case '0':
            byte |= 0x00;
            break;
        case '1':
            byte |= 0x10;
            break;
        case '2':
            byte |= 0x20;
            break;
        case '3':
            byte |= 0x30;
            break;
        case '4':
            byte |= 0x40;
            break;
        case '5':
            byte |= 0x50;
            break;
        case '6':
            byte |= 0x60;
            break;
        case '7':
            byte |= 0x70;
            break;
        case '8':
            byte |= 0x80;
            break;
        case '9':
            byte |= 0x90;
            break;
        case 'a':
        case 'A':
            byte |= 0xA0;
            break;
        case 'b':
        case 'B':
            byte |= 0xB0;
            break;
        case 'c':
        case 'C':
            byte |= 0xC0;
            break;
        case 'd':
        case 'D':
            byte |= 0xD0;
            break;
        case 'e':
        case 'E':
            byte |= 0xE0;
            break;
        case 'f':
        case 'F':
            byte |= 0xF0;
            break;
    }
    char = this._hex[this._offset];
    this._offset++;
    switch (char) {
        case '0':
            byte |= 0x00;
            break;
        case '1':
            byte |= 0x01;
            break;
        case '2':
            byte |= 0x02;
            break;
        case '3':
            byte |= 0x03;
            break;
        case '4':
            byte |= 0x04;
            break;
        case '5':
            byte |= 0x05;
            break;
        case '6':
            byte |= 0x06;
            break;
        case '7':
            byte |= 0x07;
            break;
        case '8':
            byte |= 0x08;
            break;
        case '9':
            byte |= 0x09;
            break;
        case 'a':
        case 'A':
            byte |= 0x0A;
            break;
        case 'b':
        case 'B':
            byte |= 0x0B;
            break;
        case 'c':
        case 'C':
            byte |= 0x0C;
            break;
        case 'd':
        case 'D':
            byte |= 0x0D;
            break;
        case 'e':
        case 'E':
            byte |= 0x0E;
            break;
        case 'f':
        case 'F':
            byte |= 0x0F;
            break;
    }
    return byte;
};
module.exports = FromHex;
