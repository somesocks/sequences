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
* `Flatten` 'flattens' a sequence of things into a sequence of elements.
* right now, `Flatten` supports flattening sequnences and array-like objects.
* Anything else will be passed through without modification.
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
