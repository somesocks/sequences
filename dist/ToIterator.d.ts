import { Sequence } from './types/Sequence';
declare type Iterator<T> = {
    next: () => ({
        done: boolean;
        value?: T;
    });
};
/**
*
* ```javascript
*  let From = require('sequences/From');
*  let Map = require('sequences/Map');
*  let ToIterator = require('sequences/ToIterator');
*
*  // res is [1, 2, 3]:
*  let res = From(1, 2, 3)
*    .pipe(Map, (x) => x + 1)
*    .pipe(ToIterator);
*
*  console.log(res.next()); // { value: 2, done: false }
*
* ```
* `ToIterator` converts a sequence into an iterator, if you need one
*
* @name ToIterator
* @param {Sequence} source - the source sequence
* @returns {Iterator}
* @memberof sequences
*/
declare function ToIterator<T>(this: any, source: Sequence<T>): Sequence<Iterator<T>>;
export = ToIterator;
