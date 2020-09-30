# sequences

## About

`sequences` is a collection of utilities for working with lazily-evaluated
sequences of data.

Working with lazily-evaluated sequences can be more efficient than other JS alternatives, as it allows you to minimize intermediate
memory allocations where possible, and only perform operations on elements that contribute to your final result.

```javascript

// temporary arrays are created by filter and map,
let val = [-3, -2, -1, 0, 1, 2, 3]
	.filter((val) => val > 0)
	.map((val) => val + 1)
	.reduce((sum, val) => sum + val, 0);

// no temporary arrays
let val2 = FromArray([-3, -2, -1, 0, 1, 2, 3])
	.pipe(Filter, (val) => val > 0)
	.pipe(Map, (val) => val + 1)
	.pipe(Reduce, (sum, val) => sum + val, 0)
	.read();

```


## Why not ES6 Iterators?

- ES6 Iterators require a temporary `{ done, value }` object to be allocated with every call, which reduces performace.

- `Sequence().read()` accepts a 'recycle' parameter when called, which allows you to re-use previously allocated values, to minimize allocations.

- `Sequence().read()` returns the next result or the terminator `Sequence().END`, which can simplify control flow compared to having an "independent" control channel (the iterator `done` parameter).

## Why ES6 Iterators?

- You want to use the Iterable protocol.


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
    * [.Concat](#sequences.Concat) ⇒ <code>Sequence</code>
    * [.Count](#sequences.Count) ⇒ <code>Sequence</code>
    * [.Deduplicate](#sequences.Deduplicate) ⇒ <code>Sequence</code>
    * [.Default](#sequences.Default) ⇒ <code>Sequence</code>
    * [.Drain](#sequences.Drain) ⇒ <code>Sequence</code>
    * [.Each](#sequences.Each) ⇒ <code>Sequence</code>
    * [.Filter](#sequences.Filter) ⇒ <code>Sequence</code>
    * [.Flatten](#sequences.Flatten) ⇒ <code>Sequence</code>
    * [.FromArray](#sequences.FromArray) ⇒ <code>Sequence</code>
    * [.FromBlocks](#sequences.FromBlocks) ⇒ <code>Sequence</code>
    * [.FromIterator](#sequences.FromIterator) ⇒ <code>Sequence</code>
    * [.From](#sequences.From) ⇒ <code>Sequence</code>
    * [.FromObject](#sequences.FromObject) ⇒ <code>Sequence</code>
    * [.FromSet](#sequences.FromSet) ⇒ <code>Sequence</code>
    * [.Group](#sequences.Group) ⇒ <code>Sequence</code>
    * [.Join](#sequences.Join) ⇒ <code>Array</code>
    * [.Map](#sequences.Map) ⇒ <code>Sequence</code>
    * [.Reduce](#sequences.Reduce) ⇒ <code>Sequence</code>
    * [.Replace](#sequences.Replace) ⇒ <code>Sequence</code>
    * [.Slice](#sequences.Slice) ⇒ <code>Sequence</code>
    * [.Sort](#sequences.Sort) ⇒ <code>Sequence</code>
    * [.Splice](#sequences.Splice) ⇒ <code>Sequence</code>
    * [.ToArray](#sequences.ToArray) ⇒ <code>Sequence</code>
    * [.ToBlocks](#sequences.ToBlocks) ⇒ <code>Sequence</code>
    * [.ToIterator](#sequences.ToIterator) ⇒ <code>Iterator</code>
    * [.ToObject](#sequences.ToObject) ⇒ <code>Sequence</code>
    * [.ToSet](#sequences.ToSet) ⇒ <code>Sequence</code>
    * [.Window](#sequences.Window) ⇒ <code>Sequence</code>
    * [.Zip](#sequences.Zip)
    * [.bytes](#sequences.bytes) : <code>object</code>
        * [.FromHex](#sequences.bytes.FromHex) ⇒ <code>Sequence</code>
        * [.FromWords](#sequences.bytes.FromWords) ⇒ <code>Sequence</code>
        * [.ToHex](#sequences.bytes.ToHex) ⇒ <code>Sequence</code>
        * [.ToWords](#sequences.bytes.ToWords) ⇒ <code>Sequence</code>
    * [.random](#sequences.random) : <code>object</code>
        * [.RandomBoolean](#sequences.random.RandomBoolean) ⇒ <code>Sequence</code>
        * [.RandomInteger](#sequences.random.RandomInteger) ⇒ <code>Sequence</code>
        * [.Random](#sequences.random.Random) ⇒ <code>Sequence</code>
        * [.RandomSelection](#sequences.random.RandomSelection) ⇒ <code>Sequence</code>
        * [.XORShift32](#sequences.random.XORShift32) ⇒ <code>Sequence</code>


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
const seq = From(1, 2, 3, 4)
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

let Assert = require('sequences/Assert');
let From = require('sequences/From');
let ToArray = require('sequences/ToArray');

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
`Assert` is a sequence wrapper that builds a sequence to run an assertion against every value in the sequence

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- source <code>Sequence</code> - a source sequence
- assert <code>function</code> - an assertion function
- error <code>function</code> - an error builder function


* * *

<a name="sequences.Concat"></a>

### sequences.Concat ⇒ <code>Sequence</code>
```javascript
 let Count = require('sequences/Count');
 let Slice = require('sequences/Slice');
 let Concat = require('sequences/Concat');

 // res is '0 - 1 - 2 - 3 - 4':
 let res = Count()
   .pipe(Slice, 0, 5)
   .pipe(Concat, ' - ')
   .read();
```
`Concat` performs string concatenation of all elements in a sequence

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- source <code>Sequence</code> - a source sequence
- separator <code>string</code> - an optional separator string, to be placed in


* * *

<a name="sequences.Count"></a>

### sequences.Count ⇒ <code>Sequence</code>
```javascript

let Count = require('sequences/Count');
let Slice = require('sequences/Slice');
let ToArray = require('sequences/ToArray');

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

<a name="sequences.Deduplicate"></a>

### sequences.Deduplicate ⇒ <code>Sequence</code>
```javascript
 let Count = require('sequences/Count');
 let Deduplicate = require('sequences/Deduplicate');
 let Map = require('sequences/Map');
 let Slice = require('sequences/Slice');
 let ToArray = require('sequences/ToArray');

 // res is [0, 1, 2, 3]:
 let res = Count()
   .pipe(Slice, 0, 50)
   .pipe(Map, (val) => val % 4)
   .pipe(Deduplicate)
   .pipe(ToArray)
   .read();
```
`Deduplicate` removes duplicates from a sequence, while maintaining sequence order
NOTE: `Deduplicate` uses a Set to track already-seen elements,
so it can potentially use a large amount of memory

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- source <code>Sequence</code> - a source sequence
- projection <code>function</code> - an optional projection function, that you can use to deduplicate based off some part of values


* * *

<a name="sequences.Default"></a>

### sequences.Default ⇒ <code>Sequence</code>
```javascript
 let Count = require('sequences/Count');
 let Default = require('sequences/Default');
 let Filter = require('sequences/Filter');
 let Slice = require('sequences/Slice');

 // res is [0, 10, 20, 30, 40]:
 let res = Count()
   .pipe(Slice, 0, 50)
   // filter out everything, so the sequence returns END
   .pipe(Filter, (val) => val > 9999)
   .pipe(Default, 0)
   .read(); // returns 0
```
`Default` provides a default return value to the sequence, if the sequence terminates without returning any value

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- source <code>Sequence</code> - a source sequence
- _default <code>function</code> - the default value


* * *

<a name="sequences.Drain"></a>

### sequences.Drain ⇒ <code>Sequence</code>
```javascript
 let Count = require('sequences/Count');
 let Drain = require('sequences/Drain');
 let Slice = require('sequences/Slice');

 // returns sequence terminator
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
 let Count = require('sequences/Count');
 let Drain = require('sequences/Drain');
 let Each = require('sequences/Each');
 let Slice = require('sequences/Slice');

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
`Each` takes a function, and called it once per every element in a sequence.
Useful for logging, or performing other side-effects.

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- source <code>Sequence</code> - the source sequence to drain
- each <code>function</code> - a function to get called for each value


* * *

<a name="sequences.Filter"></a>

### sequences.Filter ⇒ <code>Sequence</code>
```javascript
 let Count = require('sequences/Count');
 let Filter = require('sequences/Filter');
 let Slice = require('sequences/Slice');
 let ToArray = require('sequences/ToArray');

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

<a name="sequences.Flatten"></a>

### sequences.Flatten ⇒ <code>Sequence</code>
```javascript
 let From = require('sequences/From');
 let Flatten = require('sequences/Flatten');
 let ToArray = require('sequences/ToArray');

 // res is [1, 2, 3, 4, 5, 6]:
 let res = From(1, [], [2, 3], From(4, 5, 6))
   .pipe(Flatten)
   .pipe(ToArray)
   .read();
```
`Flatten` 'flattens' a sequence of "collections" into a sequence of elements.
right now, `Flatten` supports flattening sequences and array-like objects.
Anything else will be passed through without modification.

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- source <code>Sequence</code> - a sequence of arrays


* * *

<a name="sequences.FromArray"></a>

### sequences.FromArray ⇒ <code>Sequence</code>
```javascript
 let FromArray = require('sequences/FromArray');
 let ToArray = require('sequences/ToArray');

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
 let From = require('sequences/From');
 let FromBlocks = require('sequences/FromBlocks');
 let ToArray = require('sequences/ToArray');

 // res is [1, 2, 3, 4, 5, 6]:
 let res = From([ 1, 2, 3 ], [4, 5, 6])
   .pipe(FromBlocks)
   .pipe(ToArray)
   .read();
```
`FromBlocks` 'flattens' a sequence of arrays into a sequence of elements.
`FromBlocks` is a legacy alias for `Flatten`

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- source <code>Sequence</code> - a sequence of arrays


* * *

<a name="sequences.FromIterator"></a>

### sequences.FromIterator ⇒ <code>Sequence</code>
```javascript
```
`FromIterator` builds a sequence from an iterator

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- iterator <code>Iterator</code> - iterator to convert into a sequence


* * *

<a name="sequences.From"></a>

### sequences.From ⇒ <code>Sequence</code>
```javascript
 let From = require('sequences/From');
 let ToArray = require('sequences/ToArray');

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

<a name="sequences.FromObject"></a>

### sequences.FromObject ⇒ <code>Sequence</code>
```javascript
 let FromObject = require('sequences/FromObject');
 let ToArray = require('sequences/ToArray');

 // res is [{ key: 'a', value: 1 }, { key: 'b', value: 2 }]:
 let res = FromObject({ a: 1, b: 2 })
   .pipe(ToArray)
   .read();
```
`FromObject` builds a sequence of key-value pairs from an object.

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- obj <code>object</code> - object from which to return a sequence of key-value pairs


* * *

<a name="sequences.FromSet"></a>

### sequences.FromSet ⇒ <code>Sequence</code>
```javascript
```
`FromSet` builds a sequence from a Set

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- set <code>Set</code> - set to convert into a sequence


* * *

<a name="sequences.Group"></a>

### sequences.Group ⇒ <code>Sequence</code>
```javascript
 let From = require('sequences/From');
 let Group = require('sequences/Group');
 let ToArray = require('sequences/ToArray');

 // res is [ [1, 2, 3], [4, 5, 6] ]:
 let res = From(1, 2, 3, 4, 5, 6)
   .pipe(Group, 3)
   .pipe(ToArray)
   .read();
```
`Group` converts a sequence into a sequence of 'blocks' (fixed-size arrays of the elements)

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- source <code>Sequence</code> - the source sequence
- size <code>number</code> - the size of blocks to emit


* * *

<a name="sequences.Join"></a>

### sequences.Join ⇒ <code>Array</code>
```javascript
 let Join = require('sequences/Join');
 let ToArray = require('sequences/ToArray');

 // res is [ [1, 4], [1, 5], [1, 6], [2, 4], [2, 5], [2, 6], [3, 4], [3, 5], [3, 6] ]:
 let res = Join([1, 2, 3], [4, 5, 6])
   .pipe(ToArray)
   .read();
```
`Join` converts two arrays into a number (first array size * second array size) of pairs (arrays of two items)

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- outerSource <code>Array</code> - first array
- innerSource <code>Array</code> - second array


* * *

<a name="sequences.Map"></a>

### sequences.Map ⇒ <code>Sequence</code>
```javascript
 let Count = require('sequences/Count');
 let Map = require('sequences/Map');
 let Slice = require('sequences/Slice');
 let ToArray = require('sequences/ToArray');

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
 let Count = require('sequences/Count');
 let Reduce = require('sequences/Reduce');
 let Slice = require('sequences/Slice');

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

<a name="sequences.Replace"></a>

### sequences.Replace ⇒ <code>Sequence</code>
```javascript
 let From = require('sequences/From');
 let Replace = require('sequences/Replace');
 let ToArray = require('sequences/ToArray');

 // res is [1, 1, 2, 2, 3, 3]:
 let res = From(1, -1, 2, -2, 3, -3)
   .pipe(Replace, (val) => val < 0, (val) => -val)
   .pipe(ToArray)
   .read();
```
`Replace` allows you to replace some elements in a sequence dynamically.
It acts like a mapping with a pre-selector choosing which elements to map

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- source <code>Sequence</code> - a source sequence
- selector <code>function</code> - the selector function, that chooses which elements to replace
- mapper <code>function</code> - the mapper function, that replaces the elements


* * *

<a name="sequences.Slice"></a>

### sequences.Slice ⇒ <code>Sequence</code>
```javascript
 let Count = require('sequences/Count');
 let Slice = require('sequences/Slice');
 let ToArray = require('sequences/ToArray');

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

<a name="sequences.Sort"></a>

### sequences.Sort ⇒ <code>Sequence</code>
```javascript
 let From = require('sequences/From');
 let Sort = require('sequences/Sort');
 let ToArray = require('sequences/ToArray');

 // res is [1, 2, 3]:
 let res = From(3, 2, 1)
   .pipe(Sort)
   .pipe(ToArray)
   .read();
```
`Sort` sorts a sequence inline.

NOTE: `Sort` must buffer all values in the sequence for sorting, so it has a space complexity of O(N)

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- source <code>Sequence</code> - the source sequence


* * *

<a name="sequences.Splice"></a>

### sequences.Splice ⇒ <code>Sequence</code>
```javascript
 let From = require('sequences/From');
 let Splice = require('sequences/Splice');
 let ToArray = require('sequences/ToArray');

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
 let From = require('sequences/From');
 let ToArray = require('sequences/ToArray');

 // res is [1, 2, 3]:
 let res = From(1, 2, 3)
   .pipe(ToArray)
   .read();
```
`ToArray` converts a sequence into an array.

NOTE: `ToArray` will always return exactly once. If the source sequence is empty,
`ToArray` will return an empty array.

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- source <code>Sequence</code> - the source sequence


* * *

<a name="sequences.ToBlocks"></a>

### sequences.ToBlocks ⇒ <code>Sequence</code>
```javascript
 let From = require('sequences/From');
 let ToBlocks = require('sequences/ToBlocks');
 let ToArray = require('sequences/ToArray');

 // res is [ [1, 2, 3], [4, 5, 6] ]:
 let res = From(1, 2, 3, 4, 5, 6)
   .pipe(ToBlocks, 3)
   .pipe(ToArray)
   .read();
```
`ToBlocks` converts a sequence into a sequence of 'blocks' (fixed-size arrays of the elements)
`ToBlocks` is a legacy alias for `Group`

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- source <code>Sequence</code> - the source sequence
- size <code>number</code> - the size of blocks to emit


* * *

<a name="sequences.ToIterator"></a>

### sequences.ToIterator ⇒ <code>Iterator</code>
```javascript
 let From = require('sequences/From');
 let Map = require('sequences/Map');
 let ToIterator = require('sequences/ToIterator');

 // res is [1, 2, 3]:
 let res = From(1, 2, 3)
   .pipe(Map, (x) => x + 1)
   .pipe(ToIterator);

 console.log(res.next()); // { value: 2, done: false }

```
`ToIterator` converts a sequence into an iterator, if you need one

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- source <code>Sequence</code> - the source sequence


* * *

<a name="sequences.ToObject"></a>

### sequences.ToObject ⇒ <code>Sequence</code>
```javascript
 let From = require('sequences/From');
 let ToObject = require('sequences/ToObject');

 // res is { a: 1, b: 2 }:
 let res = From({ key: 'a', value: 1 }, { key: 'b', value: 2 })
   .pipe(ToObject)
   .read();
```
`ToObject` converts a sequence into an object
The sequence must be a sequence of key-value pairs,
structured as an object with a 'key' and a 'value' property.

NOTE: `ToObject` will always return exactly once. If the source sequence is empty,
`ToObject` will return an empty object.

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- source <code>Sequence</code> - the source sequence


* * *

<a name="sequences.ToSet"></a>

### sequences.ToSet ⇒ <code>Sequence</code>
```javascript
```
`ToSet` converts a sequence into a Set

NOTE: `ToSet` will always return exactly once. If the source sequence is empty,
`ToSet` will return an empty Set.

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- source <code>Sequence</code> - the source sequence


* * *

<a name="sequences.Window"></a>

### sequences.Window ⇒ <code>Sequence</code>
```javascript

let From = require('sequences/From');
let ToArray = require('sequences/ToArray');
let Window = require('sequences/Window');

let isInteger = (val) => Number.isInteger(val);

// val is [ [ 1, 2, 3 ], [ 2, 3, 4 ], [ 3, 4, 5 ] ]
let val = From(1, 2, 3, 4, 5)
  .pipe(Window, 3)
  .pipe(ToArray)
  .read();

// val2 is [ [ 1 ], [ 1, 2 ], [ 1, 2, 3 ], [ 2, 3, 4 ], [ 3, 4, 5 ], [ 4, 5 ], [ 5 ] ]
let val2 = From(1, 2, 3, 4, 5)
  .pipe(Window, 3, true)
  .pipe(ToArray)
  .read();

```
`Window` is a sequence wrapper that returns a fixed-length sliding window of a source sequence

**Kind**: static property of [<code>sequences</code>](#sequences)  
**Params**

- source <code>Sequence</code> - a source sequence
- size <code>number</code> - the size of the window buffer
- edges <code>boolean</code> - allow edges (a not-full buffer)


* * *

<a name="sequences.Zip"></a>

### sequences.Zip
```javascript

 let Zip = require('sequences/Zip');
 let From = require('sequences/From');
 let ToArray = require('sequences/ToArray');


 // res is [ [1, 4], [2, 5], [3, 6] ]:
 let res = Zip([1, 2, 3], [4, 5, 6])
   .pipe(ToArray)
   .read();


 // Zip takes in sequences or arrays as sources
 // res is [ [1, 4], [2, 5], [3, 6] ]:
 let res = Zip([1, 2, 3], From(4, 5, 6))
   .pipe(ToArray)
   .read();


 // the zipped sequence will be the length of the _longest_ source
 // if any source sequences end early, their result will be undefined
 // res is [ [1, 4], [2, 5], [undefined, 6] ]:
 let res = Zip([1, 2], [4, 5, 6])
   .pipe(ToArray)
   .read();


 // if you need to clip your results to the shortest sequence, use Zip.Short
 // res is [ [1, 4], [2, 5] ]:
 let res = Zip.Short([1, 2], [4, 5, 6])
   .pipe(ToArray)
   .read();

```
`Zip` combines any number of arrays or sequences into a single sequence of tuples of elements at the same index

**Kind**: static property of [<code>sequences</code>](#sequences)  

* * *

<a name="sequences.bytes"></a>

### sequences.bytes : <code>object</code>
**Kind**: static namespace of [<code>sequences</code>](#sequences)  

* [.bytes](#sequences.bytes) : <code>object</code>
    * [.FromHex](#sequences.bytes.FromHex) ⇒ <code>Sequence</code>
    * [.FromWords](#sequences.bytes.FromWords) ⇒ <code>Sequence</code>
    * [.ToHex](#sequences.bytes.ToHex) ⇒ <code>Sequence</code>
    * [.ToWords](#sequences.bytes.ToWords) ⇒ <code>Sequence</code>


* * *

<a name="sequences.bytes.FromHex"></a>

#### bytes.FromHex ⇒ <code>Sequence</code>
```javascript

let FromHex = require('sequences/bytes/FromHex');
*
```
`FromHex` converts a hex string into a Sequence of bytes

**Kind**: static property of [<code>bytes</code>](#sequences.bytes)  
**Params**

- hex <code>string</code>


* * *

<a name="sequences.bytes.FromWords"></a>

#### bytes.FromWords ⇒ <code>Sequence</code>
```javascript
 // res is [1, 2, 3, 4, 5, 6]:
 let res = From([ 1, 2, 3 ], [4, 5, 6])
   .pipe(FromWords)
   .pipe(ToArray)
   .read();
```
`FromWords` 'flattens' a sequence of words (32 bit integers) into a sequence of elements.

**Kind**: static property of [<code>bytes</code>](#sequences.bytes)  
**Returns**: <code>Sequence</code> - - a sequence of bytes  
**Params**

- source <code>Sequence</code> - a sequence of words
- isLittleEndian <code>boolean</code> - an optional parameter to set the byte order, default true


* * *

<a name="sequences.bytes.ToHex"></a>

#### bytes.ToHex ⇒ <code>Sequence</code>
```javascript
 // res is '000102':
 let res = From(1, 2, 3)
   .pipe(ToHex)
   .read();
```
`ToHex` converts a sequence into an array.

NOTE: `ToHex` will always return exactly once. If the source sequence is empty,
`ToHex` will return an empty string.

**Kind**: static property of [<code>bytes</code>](#sequences.bytes)  
**Params**

- source <code>Sequence</code> - the source sequence


* * *

<a name="sequences.bytes.ToWords"></a>

#### bytes.ToWords ⇒ <code>Sequence</code>
```javascript
 // res is [1, 2, 3, 4, 5, 6]:
 let res = From([ 1, 2, 3 ], [4, 5, 6])
   .pipe(ToWords)
   .pipe(ToArray)
   .read();
```
`ToWords` 'flattens' a sequence of words (32 bit integers) into a sequence of elements.

**Kind**: static property of [<code>bytes</code>](#sequences.bytes)  
**Returns**: <code>Sequence</code> - - a sequence of bytes  
**Params**

- source <code>Sequence</code> - a sequence of words
- isLittleEndian <code>boolean</code> - an optional parameter to set the byte order, default true


* * *

<a name="sequences.random"></a>

### sequences.random : <code>object</code>
**Kind**: static namespace of [<code>sequences</code>](#sequences)  

* [.random](#sequences.random) : <code>object</code>
    * [.RandomBoolean](#sequences.random.RandomBoolean) ⇒ <code>Sequence</code>
    * [.RandomInteger](#sequences.random.RandomInteger) ⇒ <code>Sequence</code>
    * [.Random](#sequences.random.Random) ⇒ <code>Sequence</code>
    * [.RandomSelection](#sequences.random.RandomSelection) ⇒ <code>Sequence</code>
    * [.XORShift32](#sequences.random.XORShift32) ⇒ <code>Sequence</code>


* * *

<a name="sequences.random.RandomBoolean"></a>

#### random.RandomBoolean ⇒ <code>Sequence</code>
```javascript

let RandomBoolean = require('sequences/random/RandomBoolean');
*
```
`RandomBoolean` is a Sequence pseudo-random number generator that returns a random boolean.

**Kind**: static property of [<code>random</code>](#sequences.random)  
**Params**

- seed <code>number</code> - an optional 32 bit seed


* * *

<a name="sequences.random.RandomInteger"></a>

#### random.RandomInteger ⇒ <code>Sequence</code>
```javascript

let RandomInteger = require('sequences/random/RandomInteger');
*
```
`RandomInteger` is a Sequence pseudo-random number generator that returns a random int between min and max, inclusive.
RandomInteger returns in the range [0, 1] by default.
RandomInteger has 32 bits of precision.

**Kind**: static property of [<code>random</code>](#sequences.random)  
**Params**

- min <code>number</code> - the minimum possible integer to return
- max <code>number</code> - the maximum possible integer to return
- seed <code>number</code> - an optional 32 bit seed


* * *

<a name="sequences.random.Random"></a>

#### random.Random ⇒ <code>Sequence</code>
```javascript

let Random = require('sequences/random/Random');
*
```
`Random` is a Sequence pseudo-random number generator that returns a random number between min and max, inclusive.
Random returns in the range [0, 1] by default.
Random has 32 bits of precision.

**Kind**: static property of [<code>random</code>](#sequences.random)  
**Params**

- min <code>number</code>
- max <code>number</code>
- seed <code>number</code> - an optional 32 bit seed


* * *

<a name="sequences.random.RandomSelection"></a>

#### random.RandomSelection ⇒ <code>Sequence</code>
```javascript

let RandomSelection = require('sequences/random/RandomSelection');
*
```
`RandomSelection` is a Sequence generator that returns a random relection from the choices.

**Kind**: static property of [<code>random</code>](#sequences.random)  
**Params**

- choices <code>Array</code> - the selection choices
- seed <code>number</code> - an optional 32 bit seed


* * *

<a name="sequences.random.XORShift32"></a>

#### random.XORShift32 ⇒ <code>Sequence</code>
```javascript

let XORShift32 = require('sequences/random/XORShift32');
*
```
`XORShift32` is a Sequence implementation of the XORShift32 PRNG algorithm

**Kind**: static property of [<code>random</code>](#sequences.random)  
**Params**

- seed <code>number</code> - an optional 32 bit seed


* * *

