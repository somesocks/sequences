
import { Sequence, default as BaseSequence } from './Sequence';

import ToArray from './ToArray';
import Map from './Map';
import Flatten from './Flatten';

/**
*
* ```javascript
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
function Sort(this : any, source : Sequence, comparison : () => any) : Sequence {

	const mapper = (array) => array.sort(comparison);

	const sequence = source
		.pipe(ToArray)
		.pipe(Map, mapper)
		.pipe(Flatten);

	return sequence;
}

export = Sort;