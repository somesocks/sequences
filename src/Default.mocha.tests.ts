/* eslint-env mocha */

import Assert from './Assert';
import Count from './Count';
import Slice from './Slice';
import Each from './Each';
import Filter from './Filter';
import Default from './Default';
import ToArray from './ToArray';

describe(
	'sequences/Default',
	() => {

		it('test 1', () => {
			Count()
				.pipe(Slice, 1, 3)
				.pipe(Filter, val => val > 10)
				.pipe(Default, 0)
				// .pipe(Each, console.log)
				.pipe(ToArray)
				// .pipe(Each, console.log)
				.pipe(Assert, (val) => val.length === 1)
				.pipe(Assert, (val) => val[0] === 0)
				.read();
		});

		it('test 2', () => {
			Count()
				.pipe(Slice, 1, 3)
				// .pipe(Filter, val => val > 10)
				.pipe(Default, 0)
				// .pipe(Each, console.log)
				.pipe(ToArray)
				// .pipe(Each, console.log)
				.pipe(Assert, (val) => val.length === 2)
				.pipe(Assert, (val) => val[0] === 1)
				.pipe(Assert, (val) => val[1] === 2)
				.read();
		});

	}
);
