import { Sequence } from './types/Sequence';
/**
*
* ```javascript
*  let Count = require('sequences/Count');
*  let Slice = require('sequences/Slice');
*  let Concat = require('sequences/Concat');
*
*  // res is '0 - 1 - 2 - 3 - 4':
*  let res = Count()
*    .pipe(Slice, 0, 5)
*    .pipe(Concat, ' - ')
*    .read();
* ```
* `Concat` performs string concatenation of all elements in a sequence
* @name Concat
* @param {Sequence} source - a source sequence
* @param {string} separator - an optional separator string, to be placed in
* @returns {Sequence}
* @memberof sequences
*/
declare function Concat(source: Sequence<any>, separator?: string): Sequence<string>;
export = Concat;
