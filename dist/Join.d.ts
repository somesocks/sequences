import { Sequence } from './types/Sequence';
/**
 *
 * ```javascript
 *  let Join = require('sequences/Join');
 *  let ToArray = require('sequences/ToArray');
 *
 *  // res is [ [1, 4], [1, 5], [1, 6], [2, 4], [2, 5], [2, 6], [3, 4], [3, 5], [3, 6] ]:
 *  let res = Join([1, 2, 3], [4, 5, 6])
 *    .pipe(ToArray)
 *    .read();
 * ```
 * `Join` converts two arrays into a number (first array size * second array size) of pairs (arrays of two items)
 * @name Join
 * @param {Array} outerSource - first array
 * @param {Array} innerSource - second array
 * @returns {Array}
 * @memberof sequences
 */
declare function Join<T, U>(this: any, outerSource: Array<T> | Sequence<T>, innerSource: Array<U> | Sequence<U>): Sequence<[T, U]>;
declare namespace Join {
    var prototype: any;
}
export = Join;
