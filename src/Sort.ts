
import { Sequence } from './types/Sequence';
import BaseSequence from './BaseSequence';

import ToArray from './ToArray';
import Map from './Map';
import Flatten from './Flatten';

/**
*
* ```javascript
*  let From = require('sequences/From');
*  let Sort = require('sequences/Sort');
*  let ToArray = require('sequences/ToArray');
*
*  // res is [1, 2, 3]:
*  let res = From(3, 2, 1)
*    .pipe(Sort)
*    .pipe(ToArray)
*    .read();
* ```
* `Sort` sorts a sequence inline.
*
* NOTE: `Sort` must buffer all values in the sequence for sorting, so it has a space complexity of O(N)
*
* @name Sort
* @param {Sequence} source - the source sequence
* @returns {Sequence}
* @memberof sequences
*/
function Sort<T>(this : any, source : Sequence<T>, comparison : () => any) : Sequence<T> {

	const mapper = (array) => array.sort(comparison);

	const sequence = source
		.pipe(ToArray)
		.pipe(Map, mapper)
		.pipe(Flatten);

	return sequence;
}

export = Sort;
