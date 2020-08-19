/* eslint-env node, mocha */

import assert from 'vet/utils/assert';
import isShape from 'vet/objects/isShape';

import Assert from './Assert';
import Count from './Count';
import Slice from './Slice';
// import Splice from './Splice';
// import From from './From';
import Drain from './Drain';
import Each from './Each';
// import Filter from './Filter';
import Map from './Map';
// import Reduce from './Reduce';
import FromArray from './FromArray';
import ToArray from './ToArray';
// import FromBlocks from './FromBlocks';
// import ToBlocks from './ToBlocks';
// import FromIterator from './FromIterator';
// import ToIterator from './ToIterator';
// import FromObject from './FromObject';
// import ToObject from './ToObject';
// import FromSet from './FromSet';
// import ToSet from './ToSet';

describe(
	'sequences/ToArray',
	() => {

		it('test 1', () => {
			Count()
				.pipe(Assert, (val) => Number.isInteger(val))
				.pipe(Slice, 0, 99)
				.pipe(Assert, (val) => Number.isInteger(val))
				// .pipe(Each, console.log)
				.pipe(ToArray)
				// .pipe(Each, console.log)
				.pipe(Assert, (val) => Array.isArray(val))
				.pipe(Assert, (val) => val.length === 99)
				// .pipe(Drain)
				.read();
		});

		it('correctly recycles an array', () => {
			const arr = [1, 2, 3, 4, 5];
			const arr2 = FromArray(arr)
				.pipe(Slice, 1, 3)
				.pipe(Map, (x) => x + 1)
				.pipe(ToArray)
				.pipe(Each, console.log)
				.read(arr);

			assert(
				arr === arr2,
				'didnt correctly recycle array'
			);

			assert(
				isShape([3, 4])(arr2),
				'incorrect result shape'
			);


		});


		it('performance 1', () => {
			Count()
				.pipe(Slice, 0, 1000000)
				.pipe(ToArray, 10)
				.pipe(Drain)
				.read();
		});

	}
);
