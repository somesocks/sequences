import { Sequence } from './types/Sequence';
/**
*
* ```javascript
*
* let Assert = require('sequences/Assert');
* let From = require('sequences/From');
* let ToArray = require('sequences/ToArray');
*
* let isInteger = (val) => Number.isInteger(val);
*
* // val is [ 1, 2, 3, 4 ]
* let val = From(1, 2, 3, 4)
*   .pipe(Assert, isInteger)
*   .pipe(ToArray)
*   .read();
*
* // throws an assertion error
* let val2 = From(1, 2, 3, "4")
*   .pipe(Assert, isInteger)
*   .pipe(ToArray)
*   .read();
*
* ```
* `Assert` is a sequence wrapper that builds a sequence to run an assertion against every value in the sequence
* @name Assert
* @param {Sequence} source - a source sequence
* @param {function} assert - an assertion function
* @param {function} error - an error builder function
* @returns {Sequence}
* @memberof sequences
*/
declare function Assert<T>(this: any, source: Sequence<T>, assert: (val: any) => boolean, error?: (val: any) => any): Sequence<T>;
declare namespace Assert {
    var prototype: any;
}
export = Assert;
