import { Sequence } from './Sequence';
/**
*
* ```javascript
*  let Count = require('sequences/Count');
*  let Map = require('sequences/Map');
*  let Slice = require('sequences/Slice');
*  let ToArray = require('sequences/ToArray');
*
*  // res is [1, 2, 3]:
*  let res = Count()
*    .pipe(Slice, 0, 4)
*    .pipe(Map, (val, i) => val + 1)
*    .pipe(ToArray)
*    .read();
* ```
* `Map` transforms each element in a sequence.
* @name Map
* @param {Sequence} source - a source sequence
* @param {function} map - a map function
* @returns {Sequence}
* @memberof sequences
*/
declare function Map(this: any, source: Sequence, mapper: (val: any, ind: number) => any): Sequence;
declare namespace Map {
    var prototype: any;
}
export = Map;
