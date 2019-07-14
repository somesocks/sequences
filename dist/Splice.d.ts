import { Sequence } from './Sequence';
/**
*
* ```javascript
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
declare function Splice(this: any, ...sequences: Sequence[]): Sequence;
declare namespace Splice {
    var prototype: any;
}
export = Splice;
