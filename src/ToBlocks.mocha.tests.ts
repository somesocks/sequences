/* eslint-env mocha */

// import Assert from './Assert';
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
// import ToArray from './ToArray';
// import FromBlocks from './FromBlocks';
import ToBlocks from './ToBlocks';
// import FromIterator from './FromIterator';
// import ToIterator from './ToIterator';
// import FromObject from './FromObject';
// import ToObject from './ToObject';
// import FromSet from './FromSet';
// import ToSet from './ToSet';

describe(
	'sequences.ToBlocks',
	() => {

		it('test 1', () => {
			let seq = Count();
			seq = Slice(seq, 0, 99);
			seq = ToBlocks(seq, 10);
			// seq = Each(seq, console.log);
			seq = Drain(seq);

			seq.read();
		});

		it('performance 1', () => {
			let seq = Count();
			seq = Slice(seq, 0, 1000000);
			seq = ToBlocks(seq, 10);
			seq = Drain(seq);

			seq.read();
		});

	}
);
