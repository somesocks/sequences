
import { Sequence } from '../types/Sequence';
import BaseSequence from '../BaseSequence';

/**
*
* ```javascript
*  // res is [1, 2, 3, 4, 5, 6]:
*  let res = From([ 1, 2, 3 ], [4, 5, 6])
*    .pipe(FromWords)
*    .pipe(ToArray)
*    .read();
* ```
* `FromWords` 'flattens' a sequence of words (32 bit integers) into a sequence of elements.
* @name FromWords
* @param {Sequence} source - a sequence of words
* @param {boolean} isLittleEndian - an optional parameter to set the byte order, default true
* @returns {Sequence} - a sequence of bytes
* @memberof sequences.bytes
*/
function FromWords(source : Sequence<number>, isLittleEndian = true) : Sequence<number> {
	return isLittleEndian ? FromLittleEndianWords(source) : FromBigEndianWords(source);
}

function FromLittleEndianWords(this : any, source : Sequence<number>) : Sequence<number> {
	const self = this instanceof FromLittleEndianWords ? this : Object.create(FromLittleEndianWords.prototype);

	self._source = source;
	self._buffer = 0x00;
	self._left = 0;

	return self;
}

FromLittleEndianWords.prototype = Object.create(BaseSequence.prototype);

FromLittleEndianWords.prototype.read = function read(recycle) {
	if (this._left === 0) {
		this._buffer = this._source.read(this._buffer);
		this._left = 4;
	}

	if (this._buffer === this._source.END) { return this.END; }

	const byte = (this._buffer & 0xFF) >>> 0;

	this._buffer >>= 8;
	this._left--;

	return byte;
}



function FromBigEndianWords(this : any, source : Sequence<number>) : Sequence<number> {
	const self = this instanceof FromBigEndianWords ? this : Object.create(FromBigEndianWords.prototype);

	self._source = source;
	self._buffer = 0x00;
	self._left = 0;

	return self;
}

FromBigEndianWords.prototype = Object.create(BaseSequence.prototype);

FromBigEndianWords.prototype.read = function read(recycle) {
	if (this._left === 0) {
		this._buffer = this._source.read(this._buffer);
		this._left = 4;
	}

	if (this._buffer === this._source.END) { return this.END; }

	const byte = (this._buffer & 0xFF000000) >>> 24;

	this._buffer <<= 8;
	this._left--;

	return byte;
}


export = FromWords;
