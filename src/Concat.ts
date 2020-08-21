
import { Sequence } from './types/Sequence';
import BaseSequence from './BaseSequence';

import Reduce from './Reduce';

const DEFAULT_PROJECTION = (val) => val;

/**
*
* ```javascript
*  let Count = require('sequences/Count');
*  let Slice = require('sequences/Slice');
*  let Concat = require('sequences/Concat');
*
*  // res is '0 - 1 - 2 - 3 - 4':
*  let res = Count()
*    .pipe(Slice, 0, 5)
*    .pipe(Concat, ' - ')
*    .read();
* ```
* `Concat` performs string concatenation of all elements in a sequence
* @name Concat
* @param {Sequence} source - a source sequence
* @param {string} separator - an optional separator string, to be placed in
* @returns {Sequence}
* @memberof sequences
*/
function Concat(source : Sequence<any>, separator = '') : Sequence<string> {
  return Reduce(
    source,
    (sum, val, i) => (i === 0 ? sum + val : sum + separator + val),
    ''
  );
}

export = Concat;
