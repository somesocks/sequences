/* eslint-env mocha */

import Assert from './Assert';
import Count from './Count';
import Slice from './Slice';
// import From from './From';
import Drain from './Drain';
// import Each from './Each';
// import Filter from './Filter';
// import Map from './Map';
// import Reduce from './Reduce';
// import FromArray from './FromArray';
// import ToArray from './ToArray';
// import FromBlocks from './FromBlocks';
// import ToBlocks from './ToBlocks';
// import FromIterator from './FromIterator';
// import ToIterator from './ToIterator';
// import FromObject from './FromObject';
// import ToObject from './ToObject';
// import FromSet from './FromSet';
// import ToSet from './ToSet';

const isPositive = (val) => val > 0;

describe(
	'sequences.Slice',
	() => {

		it('test 1', () => {
			Count()
				.pipe(Assert, (val) => Number.isInteger(val))
				.pipe(Slice, 0, 9)
				.pipe(Assert, (val) => Number.isInteger(val))
				.pipe(Drain)
				.read();
		});

		it('performance 1', () => {
			Count()
				.pipe(Slice, 1, 1000000)
				.pipe(Assert, isPositive)
				.pipe(Drain)
				.read();
		});

	}
);
