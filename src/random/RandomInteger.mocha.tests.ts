/* eslint-env node, mocha */

import Each from '../Each';
import Slice from '../Slice';
import Drain from '../Drain';

import RandomInteger from './RandomInteger';

describe(
	'sequences/random/RandomInteger',
	() => {

		it('test 1', () => {
			RandomInteger(0, 3)
				.pipe(Slice, 0, 9)
				// .pipe(Each, console.log)
				.pipe(Drain)
				.read();
		});

		it('performance 1', () => {
			RandomInteger()
				.pipe(Slice, 1, 1000000)
				.pipe(Drain)
				.read();
		});

	}
);
