
import { Sequence } from './types/Sequence';
import BaseSequence from './BaseSequence';

import FromIterator from './FromIterator';

/**
*
* ```javascript
* ```
* `FromSet` builds a sequence from a Set
* @name FromSet
* @param {Set} set - set to convert into a sequence
* @returns {Sequence}
* @memberof sequences
*/
function FromSet(set) : Sequence {
	var iterator = set.values();

	return FromIterator(iterator);
}

export = FromSet;
