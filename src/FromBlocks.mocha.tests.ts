/* eslint-env mocha */

import Assert from './Assert';
import Count from './Count';
import Slice from './Slice';
import From from './From';
import Drain from './Drain';
import Each from './Each';
import Filter from './Filter';
import FromArray from './FromArray';
import ToArray from './ToArray';
import FromBlocks from './FromBlocks';
import ToBlocks from './ToBlocks';

describe(
	'sequences.FromBlocks',
	() => {

		it('test 1', () => {
			const result = Count()
				.pipe(Slice, 0, 100)
				.pipe(ToBlocks, 10)
				.pipe(FromBlocks)
				.pipe(Drain)
				.read();
		});

		it('test 2', () => {
			const result = From([1, 2, 3], [4, 5, 6])
				.pipe(FromBlocks)
				.pipe(ToArray)
				.read();
		});


		it('performance 1', () => {
			Count()
				.pipe(Slice, 0, 1000000)
				.pipe(ToBlocks, 10)
				.pipe(FromBlocks)
				.pipe(Drain)
				.read();
		});

	}
);
