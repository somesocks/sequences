
import { Sequence, default as BaseSequence } from './Sequence';

import Flatten from './Flatten';

/**
*
* ```javascript
*  // res is [1, 2, 3, 4, 5, 6]:
*  let res = From([ 1, 2, 3 ], [4, 5, 6])
*    .pipe(FromBlocks)
*    .pipe(ToArray)
*    .read();
* ```
* `FromBlocks` 'flattens' a sequence of arrays into a sequence of elements.
* @name FromBlocks
* @param {Sequence} source - a sequence of arrays
* @returns {Sequence}
* @memberof sequences
*/
const FromBlocks = Flatten;

export = FromBlocks;
