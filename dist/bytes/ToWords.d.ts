import { Sequence } from '../types/Sequence';
/**
*
* ```javascript
*  // res is [1, 2, 3, 4, 5, 6]:
*  let res = From([ 1, 2, 3 ], [4, 5, 6])
*    .pipe(ToWords)
*    .pipe(ToArray)
*    .read();
* ```
* `ToWords` 'flattens' a sequence of words (32 bit integers) into a sequence of elements.
* @name ToWords
* @param {Sequence} source - a sequence of words
* @param {boolean} isLittleEndian - an optional parameter to set the byte order, default true
* @returns {Sequence} - a sequence of bytes
* @memberof sequences.bytes
*/
declare function ToWords(source: Sequence, isLittleEndian?: boolean): Sequence;
export = ToWords;
