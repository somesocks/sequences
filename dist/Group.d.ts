import { Sequence } from './types/Sequence';
/**
*
* ```javascript
*  let From = require('sequences/From');
*  let Group = require('sequences/Group');
*  let ToArray = require('sequences/ToArray');
*
*  // res is [ [1, 2, 3], [4, 5, 6] ]:
*  let res = From(1, 2, 3, 4, 5, 6)
*    .pipe(Group, 3)
*    .pipe(ToArray)
*    .read();
* ```
* `Group` converts a sequence into a sequence of 'blocks' (fixed-size arrays of the elements)
* @name Group
* @param {Sequence} source - the source sequence
* @param {number} size - the size of blocks to emit
* @returns {Sequence}
* @memberof sequences
*/
declare function Group(this: any, source: Sequence, size?: number): Sequence;
declare namespace Group {
    var prototype: any;
}
export = Group;
