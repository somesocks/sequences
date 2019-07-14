/* eslint-env node, mocha */

import Assert from './Assert';
import Count from './Count';
import Slice from './Slice';
// import Splice from './Splice';
// import From from './From';
import Drain from './Drain';
// import Each from './Each';
// import Filter from './Filter';
// import Map from './Map';
// import Reduce from './Reduce';
// import FromArray from './FromArray';
import ToArray from './ToArray';
// import FromBlocks from './FromBlocks';
// import ToBlocks from './ToBlocks';
import FromIterator from './FromIterator';
import ToIterator from './ToIterator';
// import FromObject from './FromObject';
// import ToObject from './ToObject';
// import FromSet from './FromSet';
// import ToSet from './ToSet';

describe(
	'sequences.ToIterator',
	() => {

		it('test 1', () => {
			let iter = Count()
				.pipe(Slice, 0, 10)
				.pipe(ToIterator);

			let res = FromIterator(iter)
				.pipe(ToArray)
				.pipe(Assert, (val) => Array.isArray(val))
				.pipe(Assert, (arr) => arr.length === 10)
				.read();

			// console.log('res', res);
		});

	}
);
