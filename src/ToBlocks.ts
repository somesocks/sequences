
import { Sequence } from './types/Sequence';
import BaseSequence from './BaseSequence';

import Group from './Group';
/**
*
* ```javascript
*  let From = require('sequences/From');
*  let ToBlocks = require('sequences/ToBlocks');
*  let ToArray = require('sequences/ToArray');
*
*  // res is [ [1, 2, 3], [4, 5, 6] ]:
*  let res = From(1, 2, 3, 4, 5, 6)
*    .pipe(ToBlocks, 3)
*    .pipe(ToArray)
*    .read();
* ```
* `ToBlocks` converts a sequence into a sequence of 'blocks' (fixed-size arrays of the elements)
* `ToBlocks` is a legacy alias for `Group`
* @name ToBlocks
* @param {Sequence} source - the source sequence
* @param {number} size - the size of blocks to emit
* @returns {Sequence}
* @memberof sequences
*/
const ToBlocks = Group;

export = ToBlocks;
