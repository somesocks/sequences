/* eslint-env mocha */

import { Sequence, SequenceTransformer, SQT } from './types';


import Assert from './Assert';
import From from './From';
import Drain from './Drain';
import Count from './Count';
import Slice from './Slice';

const isPositive = (val) => val > 0;

describe(
	'sequences/Assert',
	() => {

		it('test 1', () => {
			From(1, 2, 3)
				.pipe(Assert, isPositive)
				.pipe(Drain)
				.read();
		});

		it('test 2', () => {
			try {
				From(1, 2, 3, -1)
					.pipe(Assert, isPositive)
					.pipe(Drain)
					.read();
				return false;
			} catch (err) {
				return true;
			}
		});

		it('performance 1', () => {
			Count(1)
        .pipe(Assert, isPositive)
				.pipe(Slice, 1, 10000000)
				.pipe(Drain)
				.read();
		});

	}
);
