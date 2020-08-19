import { Sequence } from './types/Sequence';
/**
*
* ```javascript
*  let From = require('sequences/From');
*  let Splice = require('sequences/Splice');
*  let ToArray = require('sequences/ToArray');
*
*  // res is [1, 2, 3, 4, 5, 6]:
*  let res = Splice(From(1, 2, 3), From(4, 5, 6))
*    .pipe(ToArray)
*    .read();
* ```
* `Splice` 'splices' several sequences together, concatenating them into a single sequence
* @name Splice
* @param {...Sequence} sources - the source sequences
* @returns {Sequence}
* @memberof sequences
*/
declare function Splice<T>(this: any, ...sequences: Sequence<T>[]): Sequence<T>;
declare namespace Splice {
    var prototype: any;
}
export = Splice;
