import { Sequence } from './types';
/**
*
* ```javascript
*  let Count = require('sequences/Count');
*  let Filter = require('sequences/Filter');
*  let Slice = require('sequences/Slice');
*  let ToArray = require('sequences/ToArray');
*
*  // res is [0, 10, 20, 30, 40]:
*  let res = Count()
*    .pipe(Slice, 0, 50)
*    .pipe(Filter, (val, i) => (val % 10 === 0))
*    .pipe(ToArray)
*    .read();
* ```
* `Filter` removes some items from a sequence.
* @name Filter
* @param {Sequence} source - a source sequence
* @param {function} filter - a filter function
* @returns {Sequence}
* @memberof sequences
*/
declare function Filter<T>(this: any, source: Sequence<T>, filter: (val: any) => boolean): Sequence<T>;
declare namespace Filter {
    var prototype: any;
}
export = Filter;
