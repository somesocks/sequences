/* eslint-env node, mocha */

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
import FromIterator from './FromIterator';
import ToIterator from './ToIterator';

describe(
	'sequences.FromIterator',
	() => {

		it('test 1', () => {
			let iter = Count()
				.pipe(Slice, 0, 10)
				.pipe(ToIterator);

			let res = FromIterator(iter)
				.pipe(ToArray)
				.read();

			console.log('res', res);
		});

	}
);
