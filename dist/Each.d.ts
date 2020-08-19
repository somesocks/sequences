import { Sequence } from './types/Sequence';
/**
*
* ```javascript
*  let Count = require('sequences/Count');
*  let Drain = require('sequences/Drain');
*  let Each = require('sequences/Each');
*  let Slice = require('sequences/Slice');
*
*  // should log:
*  // element 0 is 1
*  // element 1 is 2
*  // element 2 is 3
*  Count()
*    .pipe(Slice, 1, 4)
*    .pipe(Each, (val, i) => console.log(`element ${i} is ${val}`))
*    .pipe(Drain)
*    .read();
* ```
* `Each` takes a function, and called it once per every element in a sequence.
* Useful for logging, or performing other side-effects.
* @name Each
* @param {Sequence} source - the source sequence to drain
* @param {function} each - a function to get called for each value
* @returns {Sequence}
* @memberof sequences
*/
declare function Each<T>(this: any, source: Sequence<T>, each: () => any): Sequence<T>;
declare namespace Each {
    var prototype: any;
}
export = Each;
