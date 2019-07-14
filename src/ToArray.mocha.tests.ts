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
// import FromIterator from './FromIterator';
// import ToIterator from './ToIterator';
// import FromObject from './FromObject';
// import ToObject from './ToObject';
// import FromSet from './FromSet';
// import ToSet from './ToSet';

describe(
	'sequences.ToArray',
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
				.pipe(Drain)
				.read();
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
