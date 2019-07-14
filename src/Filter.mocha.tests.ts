/* eslint-env mocha */

import Assert from './Assert';
import Count from './Count';
import Slice from './Slice';
import From from './From';
import Drain from './Drain';
import Each from './Each';
import ToArray from './ToArray';
import Filter from './Filter';

describe(
	'sequences.Filter',
	() => {
		it('test case 1', () => {
			Count()
				.pipe(Slice, 0, 50)
				.pipe(Filter, (val) => (val % 10 === 0))
				// .pipe(Each, console.log)
				.pipe(Drain)
				.read();
		});

		it('performance test', () => {
			Count()
				.pipe(Slice, 0, 10000000)
				.pipe(Filter, (val, i) => (val % 2 === 0))
				.pipe(Filter, (val, i) => (val % 3 === 0))
				.pipe(Filter, (val, i) => (val % 5 === 0))
				.pipe(Filter, (val, i) => (val % 7 === 0))
				// .pipe(Slice, 1, 100)
				.pipe(ToArray)
				.pipe(Drain)
				.read();
		});

		it('performance test control group', () => {
			let arr = Array(10000000).fill(0);
			arr = arr
				.map((v, i) => i)
				.filter((val) => val % 2 === 0)
				.filter((val) => val % 3 === 0)
				.filter((val) => val % 5 === 0)
				.filter((val) => val % 7 === 0);
		});


	}
);
