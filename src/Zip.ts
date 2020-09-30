
import { Sequence } from './types/Sequence';
import BaseSequence from './BaseSequence';

import From from './From';
import FromArray from './FromArray';

const isArrayLike = function (val) {
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
function Zip<T = any[]>(this : any, ...sources: any[]) : Sequence<T> {
    const self = this instanceof Zip ? this : Object.create(Zip.prototype);

    self._sources = sources;

    for (let i = 0; i < self._sources.length; i++) {
      if (isArrayLike(self._sources[i])) { self._sources[i] = FromArray(self._sources[i]); }
    }

    return self;
}


Zip.prototype = Object.create(BaseSequence.prototype);

Zip.prototype.read = function read(recycle) {
    let result = recycle || [];
    result.length = this._sources.length;

    let hasResult = false;

    for (let i = 0; i < this._sources.length; i++) {
      const source = this._sources[i];
      let val = source.read();
      hasResult = hasResult || (val !== source.END);
      val = val !== source.END ? val : undefined;
      result[i] = val;
    }

    result = hasResult ? result : this.END;

    return result;
};

function ShortZip<T = any[]>(this : any, ...sources: any[]) : Sequence<T> {
    const self = this instanceof ShortZip ? this : Object.create(ShortZip.prototype);

    self._sources = sources;

    for (let i = 0; i < self._sources.length; i++) {
      if (isArrayLike(self._sources[i])) { self._sources[i] = FromArray(self._sources[i]); }
    }

    return self;
}


ShortZip.prototype = Object.create(BaseSequence.prototype);

ShortZip.prototype.read = function read(recycle) {
    let result = recycle || [];
    result.length = this._sources.length;

    let hasResult = true;

    for (let i = 0; i < this._sources.length; i++) {
      const source = this._sources[i];
      let val = source.read();
      hasResult = hasResult && (val !== source.END);
      val = val !== source.END ? val : undefined;
      result[i] = val;
    }

    result = hasResult ? result : this.END;

    return result;
};

Zip.Short = ShortZip;

export = Zip;
