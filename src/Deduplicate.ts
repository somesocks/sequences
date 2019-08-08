
import { Sequence, default as BaseSequence } from './Sequence';

import Filter from './Filter';

const DEFAULT_PROJECTION = (val) => val;

/**
*
* ```javascript
*  // res is [0, 1, 2, 3]:
*  let res = Count()
*    .pipe(Slice, 0, 50)
*    .pipe(Map, (val) => val % 4)
*    .pipe(Deduplicate)
*    .pipe(ToArray)
*    .read();
* ```
* `Deduplicate` removes duplicates from a sequence, while maintaining sequence order
* NOTE: `Deduplicate` uses a Set to track already-seen elements,
* so it can potentially use a large amount of memory
* @name Deduplicate
* @param {Sequence} source - a source sequence
* @param {function} projection - an optional projection function, that you can use to deduplicate based off some part of values
* @returns {Sequence}
* @memberof sequences
*/
function Deduplicate (source : Sequence, projection = DEFAULT_PROJECTION) {
	const _filterSet = new Set();
	const filter = (val) => {
		val = projection(val);
		if (_filterSet.has(val)) {
			return false;
		} else {
			_filterSet.add(val);
			return true;
		}
	};

	return Filter(source, filter);
};

export = Deduplicate;
