import { SequenceTransformer, SequenceEnd } from './types/Sequence';
/**
*
* ```javascript
*  let Count = require('sequences/Count');
*  let Drain = require('sequences/Drain');
*  let Slice = require('sequences/Slice');
*
*  // returns sequence terminator
*  Count()
*    .pipe(Slice, 0, 4)
*    .pipe(Drain)
*    .read();
* ```
* `Drain` is a sequence constructor wraps a source sequence, and when read is called it reads the entire sequence and throws it away.
* Useful for sequences with side-effects.
* @name Drain
* @param {Sequence} source - the source sequence to drain
* @returns {Sequence}
* @memberof sequences
*/
declare const Drain: SequenceTransformer<SequenceEnd, any>;
export = Drain;
