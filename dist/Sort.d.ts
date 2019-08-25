import { Sequence } from './Sequence';
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
declare function Sort(this: any, source: Sequence, comparison: () => any): Sequence;
export = Sort;