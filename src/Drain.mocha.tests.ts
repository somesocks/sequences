/* eslint-env mocha */

import Assert from './Assert';
import Count from './Count';
import Slice from './Slice';
import From from './From';
import Drain from './Drain';

describe(
	'sequences.Drain',
	() => {

		it('test 1', () => {
			Count()
				.pipe(Slice, 0, 9)
				.pipe(Drain)
				.read();
		});

		it('performance 1', () => {
			Count()
				.pipe(Slice, 1, 1000000)
				.pipe(Drain)
				.read();
		});

	}
);
