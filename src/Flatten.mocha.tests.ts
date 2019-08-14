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
import Flatten from './Flatten';
import Group from './Group';

describe(
	'sequences/Flatten',
	() => {

		it('test 1', () => {
			const result = Count()
				.pipe(Slice, 0, 100)
				.pipe(Group, 10)
				.pipe(Flatten)
				.pipe(Drain)
				.read();
		});

		it('test 2', () => {
			const result = From([1, 2, 3], [4, 5, 6])
				.pipe(Flatten)
				.pipe(ToArray)
				.read();
		});

		it('empty arrays work correctly', () => {
			const result = From([], [], [1, 2, 3], [], [])
				.pipe(Flatten)
				.pipe(ToArray)
				.pipe(Assert, (res) => res.length === 3)
				.pipe(Assert, (res) => res[0] === 1)
				.pipe(Assert, (res) => res[1] === 2)
				.pipe(Assert, (res) => res[2] === 3)
				.read();
		});


		it('performance 1', () => {
			Count()
				.pipe(Slice, 0, 1000000)
				.pipe(Group, 10)
				.pipe(Flatten)
				.pipe(Drain)
				.read();
		});

	}
);
