/* eslint-env node, mocha */

import Each from '../Each';
import Slice from '../Slice';
import Drain from '../Drain';

import RandomBoolean from './RandomBoolean';

describe(
	'sequences/random/RandomBoolean',
	() => {

		it('test 1', () => {
			RandomBoolean()
				.pipe(Slice, 0, 19)
				.pipe(Each, console.log)
				.pipe(Drain)
				.read();
		});

		it('performance 1', () => {
			RandomBoolean()
				.pipe(Slice, 1, 1000000)
				// .pipe(Slice, 1, 10)
				.pipe(Drain)
				.read();
		});

	}
);
