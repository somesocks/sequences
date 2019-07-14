/* eslint-env mocha */

import Assert from './Assert';
import Count from './Count';
import Slice from './Slice';
import From from './From';
import Drain from './Drain';

const isPositive = (val) => val > 0;

describe(
	'sequences.Count',
	() => {

		it('test 1', () => {
			Count()
				.pipe(Assert, (val) => Number.isInteger(val))
				.pipe(Slice, 0, 9)
				.pipe(Assert, (val) => Number.isInteger(val))
				.pipe(Drain)
				.read();
		});

		it('performance 1', () => {
			Count()
				.pipe(Slice, 1, 10000000)
				.pipe(Drain)
				.read();
		});

	}
);
