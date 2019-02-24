# sequences

## API

<a name="sequences"></a>

## sequences : <code>object</code>
**Kind**: global namespace  

* [sequences](#sequences) : <code>object</code>
    * [.Sequence](#sequences.Sequence)
        * [new Sequence()](#new_sequences.Sequence_new)
        * [sequence.read(recycle)](#sequences.Sequence+read)
        * [sequence.pipe(sequenceConstructor, ...args)](#sequences.Sequence+pipe)
    * [.Assert](#sequences.Assert) ⇒ <code>Sequence</code>
    * [.Count](#sequences.Count) ⇒ <code>Sequence</code>
    * [.Drain](#sequences.Drain) ⇒ <code>Sequence</code>
    * [.Each](#sequences.Each) ⇒ <code>Sequence</code>
    * [.Filter](#sequences.Filter) ⇒ <code>Sequence</code>
    * [.FromArray](#sequences.FromArray) ⇒ <code>Sequence</code>
    * [.FromBlocks](#sequences.FromBlocks) ⇒ <code>Sequence</code>
    * [.From](#sequences.From) ⇒ <code>Sequence</code>
    * [.Map](#sequences.Map) ⇒ <code>Sequence</code>
    * [.Reduce](#sequences.Reduce) ⇒ <code>Sequence</code>
    * [.Slice](#sequences.Slice) ⇒ <code>Sequence</code>
    * [.Splice](#sequences.Splice) ⇒ <code>Sequence</code>
    * [.ToArray](#sequences.ToArray) ⇒ <code>Sequence</code>
    * [.ToBlocks](#sequences.ToBlocks) ⇒ <code>Sequence</code>


* * *

<a name="sequences.Sequence"></a>

### sequences.Sequence
**Kind**: static class of [<code>sequences</code>](#sequences)  

* [.Sequence](#sequences.Sequence)
    * [new Sequence()](#new_sequences.Sequence_new)
    * [sequence.read(recycle)](#sequences.Sequence+read)
    * [sequence.pipe(sequenceConstructor, ...args)](#sequences.Sequence+pipe)


* * *

<a name="new_sequences.Sequence_new"></a>

#### new Sequence()
`Sequence` is the base sequence class.
it should always be subclassed.
sequence constructors should never require new.


* * *

<a name="sequences.Sequence+read"></a>

#### sequence.read(recycle)
read is the core method of a sequence.  read should return the next value in the sequence.
if there are no more values to read, read should return Sequence.END

**Kind**: instance method of [<code>Sequence</code>](#sequences.Sequence)  
**Params**

- recycle - a 'container' value to re-use when returning the next value.  always optional.


* * *

<a name="sequences.Sequence+pipe"></a>

#### sequence.pipe(sequenceConstructor, ...args)
```javascript
// this
let seq = From(1, 2, 3, 4);
seq = Slice(seq, 0, 10);
seq = Assert(seq, (val, i) => Number.isInteger(val));
seq = ToArray(seq);

// is equivalent to this
const seq = From(1, 2, 3, "4")
   .pipe(Slice, 0, 10)
   .pipe(Assert, (val, i) => Number.isInteger(val))
   .pipe(ToArray);
```
pipe is a utility method to wrap one sequence in another.

**Kind**: instance method of [<code>Sequence</code>](#sequences.Sequence)  
**Params**

- sequenceConstructor - the constructor function for another sequence.
pipe assumes the constructor takes a source sequence as its first argument
- ...args <code>\*</code> - any number of additional args to pass into sequenceConstructor


* * *

<a name="sequences.Assert"></a>

### sequences.Assert ⇒ <code>Sequence</code>
```javascript

let Assert = require('@somesocks/sequences/Assert');
let From = require('@somesocks/sequences/From');
let ToArray = require('@somesocks/sequences/ToArray');

let isInteger = (val) => Number.isInteger(val);

// val is [ 1, 2, 3, 4 ]
let val = From(1, 2, 3, 4)
  .pipe(Assert, isInteger)
  .pipe(ToArray)
  .read();

// throws an assertion error
let val2 = From(1, 2, 3, "4")
  .pipe(Assert, isInteger)
  .pipe(ToArray)
  .read();

```
`Assert` is a sequence varructor that builds a sequence to run an assertion against every value in the sequence

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- source <code>Sequence</code> - a source sequence
- assert <code>function</code> - an assertion function
- error <code>function</code> - an error builder function


* * *

<a name="sequences.Count"></a>

### sequences.Count ⇒ <code>Sequence</code>
```javascript

let Count = require('@somesocks/sequences/Count');
let Slice = require('@somesocks/sequences/Slice');
let ToArray = require('@somesocks/sequences/ToArray');

// val is [ 0, 1, 2, 3 ]
let val = Count()
  .pipe(Slice, 0, 4)
  .pipe(ToArray)
  .read();

```
`Count` is a sequence constructor that builds a sequence that counts integers upward
`Count` never terminates, so make sure to add a terminating sequence like a `Slice` somewhere after it.

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- start <code>number</code> - the number to start counting from


* * *

<a name="sequences.Drain"></a>

### sequences.Drain ⇒ <code>Sequence</code>
```javascript
 // returns Sequence.END
 Count()
   .pipe(Slice, 0, 4)
   .pipe(Drain)
   .read();
```
`Drain` is a sequence constructor wraps a source sequence, and when read is called it reads the entire sequence and throws it away.
Useful for sequences with side-effects.

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- source <code>Sequence</code> - the source sequence to drain


* * *

<a name="sequences.Each"></a>

### sequences.Each ⇒ <code>Sequence</code>
```javascript
 // should log:
 // element 0 is 1
 // element 1 is 2
 // element 2 is 3
 Count()
   .pipe(Slice, 1, 4)
   .pipe(Each, (val, i) => console.log(`element ${i} is ${val}`))
   .pipe(Drain)
   .read();
```
`Each` is a sequence constructor wraps a source sequence, and when read is called it reads the entire sequence and throws it away.
Useful for sequences with side-effects.

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- source <code>Sequence</code> - the source sequence to drain
- each <code>function</code> - a function to get called for each value


* * *

<a name="sequences.Filter"></a>

### sequences.Filter ⇒ <code>Sequence</code>
```javascript
 // res is [0, 10, 20, 30, 40]:
 let res = Count()
   .pipe(Slice, 0, 50)
   .pipe(Filter, (val, i) => (val % 10 === 0))
   .pipe(ToArray)
   .read();
```
`Filter` removes some items from a sequence.

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- source <code>Sequence</code> - a source sequence
- filter <code>function</code> - a filter function


* * *

<a name="sequences.FromArray"></a>

### sequences.FromArray ⇒ <code>Sequence</code>
```javascript
 // res is [1, 2, 3]:
 let res = FromArray([ 1, 2, 3 ])
   .pipe(ToArray)
   .read();
```
`FromArray` builds a sequence from an array.

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- values <code>array</code> - values to return in the sequence, in order


* * *

<a name="sequences.FromBlocks"></a>

### sequences.FromBlocks ⇒ <code>Sequence</code>
```javascript
 // res is [1, 2, 3, 4, 5, 6]:
 let res = From([ 1, 2, 3 ], [4, 5, 6])
   .pipe(FromBlocks)
   .pipe(ToArray)
   .read();
```
`FromBlocks` 'flattens' a sequence of arrays into a sequence of elements.

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- source <code>Sequence</code> - a sequence of arrays


* * *

<a name="sequences.From"></a>

### sequences.From ⇒ <code>Sequence</code>
```javascript
 // res is [1, 2, 3]:
 let res = From(1, 2, 3)
   .pipe(ToArray)
   .read();
```
`From` builds a sequence from its arguments.

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- ...values <code>\*</code> - values to return in the sequence, in order


* * *

<a name="sequences.Map"></a>

### sequences.Map ⇒ <code>Sequence</code>
```javascript
 // res is [1, 2, 3]:
 let res = Count()
   .pipe(Slice, 0, 4)
   .pipe(Map, (val, i) => val + 1)
   .pipe(ToArray)
   .read();
```
`Map` transforms each element in a sequence.

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- source <code>Sequence</code> - a source sequence
- map <code>function</code> - a map function


* * *

<a name="sequences.Reduce"></a>

### sequences.Reduce ⇒ <code>Sequence</code>
```javascript
 // res is 6:
 let res = Count()
   .pipe(Slice, 0, 4)
   .pipe(Reduce, (state, val, i) => state + val)
   .read();
```
`Reduce` 'reduces' a sequence of elements to a single result.

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- source <code>Sequence</code> - a source sequence
- reduce <code>function</code> - a reduce function
- state <code>\*</code> - the initial value of the state


* * *

<a name="sequences.Slice"></a>

### sequences.Slice ⇒ <code>Sequence</code>
```javascript
 // res is [1, 2, 3]:
 let res = Count()
   .pipe(Slice, 0, 4)
   .pipe(ToArray)
   .read();
```
`Slice` 'slices' out a piece of a sequence to use

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- source <code>Sequence</code> - a source sequence
- start <code>integer</code> - the index to start from (inclusive)
- end <code>integer</code> - the index to end at (exclusive)


* * *

<a name="sequences.Splice"></a>

### sequences.Splice ⇒ <code>Sequence</code>
```javascript
 // res is [1, 2, 3, 4, 5, 6]:
 let res = Splice(From(1, 2, 3), From(4, 5, 6))
   .pipe(ToArray)
   .read();
```
`Splice` 'splices' several sequences together, concatenating them into a single sequence

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- ...sources <code>Sequence</code> - the source sequences


* * *

<a name="sequences.ToArray"></a>

### sequences.ToArray ⇒ <code>Sequence</code>
```javascript
 // res is [1, 2, 3]:
 let res = From(1, 2, 3)
   .pipe(ToArray)
   .read();
```
`ToArray` converts a sequence into an array

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- source <code>Sequence</code> - the source sequence


* * *

<a name="sequences.ToBlocks"></a>

### sequences.ToBlocks ⇒ <code>Sequence</code>
```javascript
 // res is [ [1, 2, 3], [4, 5, 6] ]:
 let res = From(1, 2, 3, 4, 5, 6)
   .pipe(ToBlocks, 3)
   .pipe(ToArray)
   .read();
```
`ToBlocks` converts a sequence into a sequence of 'blocks' (fixed-size arrays of the elements)

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- source <code>Sequence</code> - the source sequence
- size <code>number</code> - the size of blocks to emit


* * *
