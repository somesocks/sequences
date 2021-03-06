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
// import Flatten from './Flatten';
import Group from './Group';
// import FromIterator from './FromIterator';
// import ToIterator from './ToIterator';
// import FromObject from './FromObject';
// import ToObject from './ToObject';
// import FromSet from './FromSet';
// import ToSet from './ToSet';

describe(
	'sequences/Group',
	() => {

    it('test 1', () => {
			let res = Count()
        .pipe(Slice, 0, 99)
        .pipe(Group, 10)
        .pipe(Drain)
        .read();
		});

		it('performance 1', () => {
			let res = Count()
			.pipe(Slice, 0, 1000000)
			.pipe(Group, 10)
			.pipe(Drain)
      .read();
		});

	}
);
