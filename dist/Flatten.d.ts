import { Sequence } from './types/Sequence';
/**
*
* ```javascript
*  let From = require('sequences/From');
*  let Flatten = require('sequences/Flatten');
*  let ToArray = require('sequences/ToArray');
*
*  // res is [1, 2, 3, 4, 5, 6]:
*  let res = From(1, [], [2, 3], From(4, 5, 6))
*    .pipe(Flatten)
*    .pipe(ToArray)
*    .read();
* ```
* `Flatten` 'flattens' a sequence of "collections" into a sequence of elements.
* right now, `Flatten` supports flattening sequences and array-like objects.
* Anything else will be passed through without modification.
* @name Flatten
* @param {Sequence} source - a sequence of arrays
* @returns {Sequence}
* @memberof sequences
*/
declare function Flatten<T>(this: any, source: Sequence<(T | T[] | Sequence<T>)>): Sequence<T>;
declare namespace Flatten {
    var prototype: any;
}
export = Flatten;
