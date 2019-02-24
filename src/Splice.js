
const Sequence = require('./Sequence');

/**
*
* ```javascript
*  // res is [1, 2, 3, 4, 5, 6]:
*  let res = Splice(From(1, 2, 3), From(4, 5, 6))
*    .pipe(ToArray)
*    .read();
* ```
* `Splice` 'splices' several sequences together, concatenating them into a single sequence
* @name Splice
* @param {...Sequence} sources - the source sequences
* @returns {Sequence}
* @memberof sequences
*/
function Splice(...sequences) {
	const self = this instanceof Splice ? this : Object.create(Splice.prototype);

	self._sequences = sequences;
	self._index = 0;

	return self;
}

Splice.prototype = Object.create(Sequence.prototype);

Splice.prototype.read = function read(recycle) {
	while (true) {
		if (this._index >= this._sequences.length) {
			this.close();
			return this.END;
		}

		const sequence = this._sequences[this._index];
		const val = sequence.read(recycle);

		if (val === sequence.END) {
			this._index++;
		} else {
			return val;
		}

	}
}

module.exports = Splice;
