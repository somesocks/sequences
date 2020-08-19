import { Sequence } from './types/Sequence';
/**
*
* ```javascript
* ```
* `ToSet` converts a sequence into a Set
*
* NOTE: `ToSet` will always return exactly once. If the source sequence is empty,
* `ToSet` will return an empty Set.
*
* @name ToSet
* @param {Sequence} source - the source sequence
* @returns {Sequence}
* @memberof sequences
*/
declare function ToSet<T>(this: any, source: Sequence<T>): Sequence<Set<T>>;
declare namespace ToSet {
    var prototype: any;
}
export = ToSet;
