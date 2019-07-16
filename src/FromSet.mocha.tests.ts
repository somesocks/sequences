/* eslint-env node, mocha */

// import Assert from './Assert';
// import Count from './Count';
// import Slice from './Slice';
// import From from './From';
// import Drain from './Drain';
// import Each from './Each';
// import Filter from './Filter';
// import FromArray from './FromArray';
import ToArray from './ToArray';
// import FromBlocks from './FromBlocks';
// import ToBlocks from './ToBlocks';
// import FromIterator from './FromIterator';
// import ToIterator from './ToIterator';
// import FromObject from './FromObject';
// import ToObject from './ToObject';
import FromSet from './FromSet';
// import ToSet from './ToSet';

describe(
	'sequences/FromSet',
	() => {

		it('test 1', () => {
			FromSet(new Set([1, 2, 3]))
				// .pipe(Each, console.log)
				.pipe(ToArray)
				// .pipe(Each, console.log)
				.read();
		});

	}
);
