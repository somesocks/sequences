import { Sequence } from './types/Sequence';
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
declare function FromSet<T>(set: Set<T>): Sequence<T>;
export = FromSet;
