
type SequenceConstructor = (...args : any[]) => Sequence;

type Sequence = {

	/**
	* read is the core method of a sequence.  read should return the next value in the sequence.
	* if there are no more values to read, read should return Sequence.END
	* @function read
	* @param recycle - a 'container' value to re-use when returning the next value.  always optional.
	* @memberof sequences.Sequence#
	*/
	read : (recycle ?: any) => any,

	/**
	* ```javascript
	* // this
	* let seq = From(1, 2, 3, 4);
	* seq = Slice(seq, 0, 10);
	* seq = Assert(seq, (val, i) => Number.isInteger(val));
	* seq = ToArray(seq);
	*
	* // is equivalent to this
	* const seq = From(1, 2, 3, 4)
	*    .pipe(Slice, 0, 10)
	*    .pipe(Assert, (val, i) => Number.isInteger(val))
	*    .pipe(ToArray);
	* ```
	* pipe is a utility method to wrap one sequence in another.
	* @function pipe
	* @param next - the constructor function for another sequence.
	* pipe assumes the constructor takes a source sequence as its first argument
	* @param {...*} args - any number of additional args to pass into sequenceConstructor
	* @memberof sequences.Sequence#
	*/
	pipe : (next : SequenceConstructor, ...args : any[]) => Sequence,
};

export {
	Sequence,
	SequenceConstructor,
};
