import { Sequence } from './Sequence';
/**
*
* ```javascript
*  // res is [1, 1, 2, 2, 3, 3]:
*  let res = From(1, -1, 2, -2, 3, -3)
*    .pipe(Replace, (val) => val < 0, (val) => -val)
*    .pipe(ToArray)
*    .read();
* ```
* `Replace` allows you to replace some elements in a sequence dynamically.
* It acts like a mapping with a pre-selector choosing which elements to map
* @name Replace
* @param {Sequence} source - a source sequence
* @param {function} selector - the selector function, that chooses which elements to replace
* @param {function} mapper - the mapper function, that replaces the elements
* @returns {Sequence}
* @memberof sequences
*/
declare function Replace(this: any, source: Sequence, selector: (val: any, index: number) => boolean, mapper: (val: any, index: number) => any): Sequence;
declare namespace Replace {
    var prototype: any;
}
export = Replace;
