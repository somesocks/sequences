/**
*
* ```javascript
*  // returns Sequence.END
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
declare function Drain(this: any, source: any): any;
declare namespace Drain {
    var prototype: any;
}
export = Drain;
