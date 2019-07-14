/* eslint-env node, mocha */

// import Assert from './Assert';
// import Count from './Count';
// import Slice from './Slice';
import Splice from './Splice';
import From from './From';
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
	'sequences.Splice',
	() => {
		it('test case 1', () => {
			Splice(
				From(1, 2, 3),
				From(4, 5, 6),
				From(7, 8, 9)
			)
				// .pipe(Each, (val, i) => console.log(val, i))
				.pipe(ToArray)
				// .pipe(Each, (val, i) => console.log(val, i))
				.pipe(Drain)
				.read();
		});
	}
);
