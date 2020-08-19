import { Sequence } from './types/Sequence';
/**
*
* ```javascript
*  let Count = require('sequences/Count');
*  let Deduplicate = require('sequences/Deduplicate');
*  let Map = require('sequences/Map');
*  let Slice = require('sequences/Slice');
*  let ToArray = require('sequences/ToArray');
*
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
declare function Deduplicate<T>(source: Sequence<T>, projection?: (val: any) => any): Sequence<T>;
export = Deduplicate;
