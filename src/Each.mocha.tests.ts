/* eslint-env node, mocha */

import Assert from './Assert';
import Count from './Count';
import Slice from './Slice';
import From from './From';
import Drain from './Drain';
import Each from './Each';

describe(
	'sequences/Each',
	() => {

		it('test 1', () => {
			Count()
				.pipe(Slice, 0, 4)
				.pipe(Each, () => null)
				.pipe(Drain)
				.read();
		});

		it('performance 1', () => {
			Count()
				.pipe(Slice, 1, 10000000)
				.pipe(Each, () => null)
				.pipe(Drain)
				.read();
		});

	}
);
