
import { Sequence } from './types/Sequence';
import BaseSequence from './BaseSequence';

import From from './From';
import ToArray from './ToArray';

const isArrayLike = function (val) {
	return (typeof val === 'object' && val != null) && (typeof val.length === 'number' && val.length >= 0);
};

/**
 *
 * ```javascript
 *  let Join = require('sequences/Join');
 *  let ToArray = require('sequences/ToArray');
 *
 *  // res is [ [1, 4], [1, 5], [1, 6], [2, 4], [2, 5], [2, 6], [3, 4], [3, 5], [3, 6] ]:
 *  let res = Join([1, 2, 3], [4, 5, 6])
 *    .pipe(ToArray)
 *    .read();
 * ```
 * `Join` converts two arrays into a number (first array size * second array size) of pairs (arrays of two items)
 * @name Join
 * @param {Array} outerSource - first array
 * @param {Array} innerSource - second array
 * @returns {Array}
 * @memberof sequences
 */
function Join(this : any, outerSource : Array<any> | Sequence , innerSource : Array<any> | Sequence) : Sequence {
    const self = this instanceof Join ? this : Object.create(Join.prototype);

    self._outerSource = isArrayLike(outerSource) ?
			outerSource :
			ToArray(outerSource as Sequence).read();

    self._innerSource = isArrayLike(innerSource) ?
			innerSource :
			ToArray(innerSource as Sequence).read();

    self._outerIndex = 0;
    self._innerIndex = 0;

		// handle edge cases with 0-length arrays
		if (self._outerSource.length === 0 || self._innerSource.length === 0) {
			return From();
		}

    return self;
}


Join.prototype = Object.create(BaseSequence.prototype);

Join.prototype.read = function read(recycle) {
    if (this._innerIndex > this._innerSource.length - 1) {
        this._innerIndex = 0;
        this._outerIndex++;
    }

    if (this._outerIndex > this._outerSource.length - 1) {
        return this.END;
    }

		const res = recycle ? recycle : Array(2);

    res[0] = this._outerSource[this._outerIndex];
    res[1] = this._innerSource[this._innerIndex];
    this._innerIndex++;

    return res;
};

export = Join;
