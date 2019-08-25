/* eslint-env mocha */

import Assert from './Assert';
import Count from './Count';
import Slice from './Slice';
import From from './From';
import Drain from './Drain';
// import Each from './Each';
// import Filter from './Filter';
import Replace from './Replace';
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
	'sequences/Replace',
	() => {
		it('test case 1', () => {
			const stream = From(1, -2, 3)
				// .pipe(Each, (val, i) => console.log('Each 1', val))
				.pipe(
					Replace,
					(val) => val < 0,
					(val) => -val
				)
				// .pipe(Each, (val, i) => console.log('Each 1', val))
				.pipe(ToArray)
				.pipe(Assert, (val) => val.length === 3)
				.pipe(Assert, (val) => val[0] === 1)
				.pipe(Assert, (val) => val[1] === 2)
				.pipe(Assert, (val) => val[2] === 3)
				.pipe(Drain)
				.read();
		});

		it('performance test', () => {
			const arr = Count()
				.pipe(Slice, 0, 1000000)
				.pipe(
					Replace,
					(val) => val > 0,
					(val) => -val
				)
				.pipe(ToArray)
				// .pipe(Drain)
				.read();
		});

	}
);
