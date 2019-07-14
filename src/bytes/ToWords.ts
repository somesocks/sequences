
import { Sequence, default as BaseSequence } from '../Sequence';

/**
*
* ```javascript
*  // res is [1, 2, 3, 4, 5, 6]:
*  let res = From([ 1, 2, 3 ], [4, 5, 6])
*    .pipe(ToWords)
*    .pipe(ToArray)
*    .read();
* ```
* `ToWords` 'flattens' a sequence of words (32 bit integers) into a sequence of elements.
* @name ToWords
* @param {Sequence} source - a sequence of words
* @param {boolean} isLittleEndian - an optional parameter to set the byte order, default true
* @returns {Sequence} - a sequence of bytes
* @memberof sequences.bytes
*/
function ToWords(source : Sequence, isLittleEndian = true) : Sequence {
	return isLittleEndian ? ToLittleEndianWords(source) : ToBigEndianWords(source);
}

function ToLittleEndianWords(this : any, source : Sequence) : Sequence {
	const self = this instanceof ToLittleEndianWords ? this : Object.create(ToLittleEndianWords.prototype);

	self._source = source;
	self._buffer = 0x00;
	self._left = 0;

	return self;
}

ToLittleEndianWords.prototype = Object.create(BaseSequence.prototype);

ToLittleEndianWords.prototype.read = function read(recycle) {
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



function ToBigEndianWords(this : any, source : Sequence) : Sequence {
	const self = this instanceof ToBigEndianWords ? this : Object.create(ToBigEndianWords.prototype);

	self._source = source;
	self._buffer = 0x00;
	self._left = 0;

	return self;
}

ToBigEndianWords.prototype = Object.create(BaseSequence.prototype);

ToBigEndianWords.prototype.read = function read(recycle) {
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


export = ToWords;
