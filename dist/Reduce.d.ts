import { Sequence } from './Sequence';
/**
*
* ```javascript
*  let Count = require('sequences/Count');
*  let Reduce = require('sequences/Reduce');
*  let Slice = require('sequences/Slice');
*
*  // res is 6:
*  let res = Count()
*    .pipe(Slice, 0, 4)
*    .pipe(Reduce, (state, val, i) => state + val)
*    .read();
* ```
* `Reduce` 'reduces' a sequence of elements to a single result.
* @name Reduce
* @param {Sequence} source - a source sequence
* @param {function} reduce - a reduce function
* @param {*} state - the initial value of the state
* @returns {Sequence}
* @memberof sequences
*/
declare function Reduce(this: any, source: Sequence, reducer: (state: any, val: any, index: number) => any, state: any): Sequence;
declare namespace Reduce {
    var prototype: any;
}
export = Reduce;
