
import { Sequence, default as BaseSequence } from '../Sequence';

/**
*
* ```javascript
*
* let XORShift32 = require('sequences/random/XORShift32');
**
* ```
* `XORShift32` is a Sequence implementation of the XORShift32 PRNG algorithm
* @name XORShift32
* @param {number} seed - an optional 32 bit seed
* @returns {Sequence}
* @memberof sequences.random
*/
function XORShift32(this : any, seed ?: number) : Sequence {
	var self = this instanceof XORShift32 ? this : Object.create(XORShift32.prototype);

	self._state = seed != null ? seed : Date.now();
	self._state &= 0xFFFFFFFF;

	return self;
}

XORShift32.prototype = Object.create(BaseSequence.prototype);

XORShift32.prototype.read = function read(recycle) {
	var x = this._state;
	x ^= (x << 13);
	x ^= x >>> 17;
	x ^= x << 5;
	x >>>= 0; // force unsigned
	this._state = x;
	return x;
}

export = XORShift32;
