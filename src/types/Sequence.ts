
type SequenceConstructor<T = any> = (...args : any[]) => Sequence<T>;
type SQC<T = any> = SequenceConstructor<T>;

type SequenceTransformer<T = any, U = any> = ((source: Sequence<U>, ...args: any[]) => Sequence<T>);
type SQT<T = any, U = any> = SequenceTransformer<T, U>;

type SequenceSelector<T = any> = SequenceTransformer<T, T>;
type SQS<T = any> = SequenceSelector<T>;

// let check1 : SequenceTransformer<number, number> = {} as SequenceSelector<number>; // should work
// let check2 : SequenceTransformer<string, number> = {} as SequenceSelector<number>; // should fail
// let check3 : SequenceTransformer<number, string> = {} as SequenceSelector<number>; // should fail
//
// let check4 : SequenceSelector<number> = {} as SequenceTransformer<number, number>; // should work
// let check5 : SequenceSelector<number> = {} as SequenceTransformer<string, number>; // should fail
// let check6 : SequenceSelector<number> = {} as SequenceTransformer<number, string>; // should fail


// eslint-disable-next-line
type SequenceEnd = object & { _sequenceENDBrand: undefined };
type SQE = SequenceEnd;

type Sequence<T = any> = {

	/**
	* read is the core method of a sequence.  read should return the next value in the sequence.
	* if there are no more values to read, read should return Sequence.END
	* @function read
	* @param recycle - a 'container' value to re-use when returning the next value.  always optional.
	* @memberof sequences.Sequence#
	*/
	read: (recycle ?: T) => T | SequenceEnd,

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
  pipe: <U>(next : SequenceTransformer<U, T>, ...args : any[]) => Sequence<U>,

  END: SequenceEnd,
};
type SQ = Sequence;

export {
  Sequence,
  SQ,
	SequenceConstructor,
  SQC,
  SequenceTransformer,
  SQT,
  SequenceSelector,
  SQS,
  SequenceEnd,
  SQE,
};
