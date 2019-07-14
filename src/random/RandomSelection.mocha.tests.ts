/* eslint-env node, mocha */

import Each from '../Each';
import Slice from '../Slice';
import Drain from '../Drain';

import RandomSelection from './RandomSelection';

describe(
	'sequences/random/RandomSelection',
	() => {

		it('test 1', () => {
			RandomSelection(['a', 'b', 'c'])
				.pipe(Slice, 0, 9)
				// .pipe(Each, console.log)
				.pipe(Drain)
				.read();
		});

		it('performance 1', () => {
			RandomSelection(['a', 'b', 'c'])
				.pipe(Slice, 1, 1000000)
				.pipe(Drain)
				.read();
		});

	}
);
