import { Sequence } from './types/Sequence';
/**
*
* ```javascript
* ```
* `FromIterator` builds a sequence from an iterator
* @name FromIterator
* @param {Iterator} iterator - iterator to convert into a sequence
* @returns {Sequence}
* @memberof sequences
*/
declare function FromIterator(this: any, iterator: any): Sequence;
declare namespace FromIterator {
    var prototype: any;
}
export = FromIterator;
