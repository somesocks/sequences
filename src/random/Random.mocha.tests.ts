/* eslint-env node, mocha */

import Random from './Random';
import Slice from '../Slice';
import Drain from '../Drain';

describe(
	'sequences/random/Random',
	() => {

		it('test 1', () => {
			Random()
				.pipe(Slice, 0, 99)
				// .pipe(Each, console.log)
				.pipe(Drain)
				.read();
		});

		it('performance 1', () => {
			Random()
				.pipe(Slice, 1, 1000000)
				.pipe(Drain)
				.read();
		});

	}
);
