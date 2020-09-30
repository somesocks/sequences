import { Sequence } from './types/Sequence';
/**
 *
 * ```javascript
 *
 *  let Zip = require('sequences/Zip');
 *  let From = require('sequences/From');
 *  let ToArray = require('sequences/ToArray');
 *
 *
 *  // res is [ [1, 4], [2, 5], [3, 6] ]:
 *  let res = Zip([1, 2, 3], [4, 5, 6])
 *    .pipe(ToArray)
 *    .read();
 *
 *
 *  // Zip takes in sequences or arrays as sources
 *  // res is [ [1, 4], [2, 5], [3, 6] ]:
 *  let res = Zip([1, 2, 3], From(4, 5, 6))
 *    .pipe(ToArray)
 *    .read();
 *
 *
 *  // the zipped sequence will be the length of the _longest_ source
 *  // if any source sequences end early, their result will be undefined
 *  // res is [ [1, 4], [2, 5], [undefined, 6] ]:
 *  let res = Zip([1, 2], [4, 5, 6])
 *    .pipe(ToArray)
 *    .read();
 *
 *
 *  // if you need to clip your results to the shortest sequence, use Zip.Short
 *  // res is [ [1, 4], [2, 5] ]:
 *  let res = Zip.Short([1, 2], [4, 5, 6])
 *    .pipe(ToArray)
 *    .read();
 *
 * ```
 * `Zip` combines any number of arrays or sequences into a single sequence of tuples of elements at the same index
 * @name Zip
 * @memberof sequences
 */
declare function Zip<T = any[]>(this: any, ...sources: any[]): Sequence<T>;
declare namespace Zip {
    var prototype: any;
    var Short: typeof ShortZip;
}
declare function ShortZip<T = any[]>(this: any, ...sources: any[]): Sequence<T>;
declare namespace ShortZip {
    var prototype: any;
}
export = Zip;
