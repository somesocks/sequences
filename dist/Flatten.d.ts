import { Sequence } from './Sequence';
/**
*
* ```javascript
*  // res is [1, 2, 3, 4, 5, 6]:
*  let res = From([ 1, 2, 3 ], [4, 5, 6])
*    .pipe(Flatten)
*    .pipe(ToArray)
*    .read();
* ```
* `Flatten` 'flattens' a sequence of arrays into a sequence of elements.
* @name Flatten
* @param {Sequence} source - a sequence of arrays
* @returns {Sequence}
* @memberof sequences
*/
declare function Flatten(this: any, source: Sequence): Sequence;
declare namespace Flatten {
    var prototype: any;
}
export = Flatten;
