/* eslint-env mocha */

import Assert from './Assert';
import Count from './Count';
import Slice from './Slice';
import From from './From';
import Drain from './Drain';
import Each from './Each';
import Filter from './Filter';

const isPositive = (val) => val > 0;

describe(
	'sequences/From',
	() => {

		it('test 1', () => {
			From(1, 2, 3)
				.pipe(Assert, isPositive)
				.pipe(Drain)
				.read();
		});

	}
);
