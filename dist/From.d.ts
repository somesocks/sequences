import { Sequence } from './types/Sequence';
/**
*
* ```javascript
*  let From = require('sequences/From');
*  let ToArray = require('sequences/ToArray');
*
*  // res is [1, 2, 3]:
*  let res = From(1, 2, 3)
*    .pipe(ToArray)
*    .read();
* ```
* `From` builds a sequence from its arguments.
* @name From
* @param {...*} values - values to return in the sequence, in order
* @returns {Sequence}
* @memberof sequences
*/
declare function From<T>(this: any, ...args: T[]): Sequence<T>;
declare namespace From {
    var prototype: any;
}
export = From;
