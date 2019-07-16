/* eslint-env node, mocha */

// import Assert from './Assert';
// import Count from './Count';
// import Slice from './Slice';
// import Splice from './Splice';
import From from './From';
// import Drain from './Drain';
import Each from './Each';
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
import ToObject from './ToObject';
// import FromSet from './FromSet';
// import ToSet from './ToSet';

describe(
	'sequences/ToObject',
	() => {

		it('test 1', () => {
			From({ key: 'a', value: 1 }, { key: 'b', value: 2 })
				// .pipe(Each, console.log)
				.pipe(ToObject)
				// .pipe(Each, console.log)
				.read();
		});

	}
);
