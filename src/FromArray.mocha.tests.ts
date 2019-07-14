/* eslint-env mocha */

import Assert from './Assert';
import Count from './Count';
import Slice from './Slice';
import From from './From';
import Drain from './Drain';
import Each from './Each';
import Filter from './Filter';
import FromArray from './FromArray';


const isPositive = (val) => val > 0;

describe(
	'sequences.FromArray',
	() => {

		it('test 1', () => {
			FromArray([1, 2, 3])
				.pipe(Assert, isPositive)
				.pipe(Drain)
				.read();
		});

		it('performance test', () => {
			const LARGE_ARRAY = Array(10000).fill(0);
			for(let i = 0; i < 1000; i++) {
				FromArray(LARGE_ARRAY)
					.pipe(Drain)
					.read();
			}
		});

		it('performance test control', () => {
			const LARGE_ARRAY = Array(10000).fill(0);
			for(let i = 0; i < 1000; i++) {
				const iterator = LARGE_ARRAY[Symbol.iterator]();

				let val = iterator.next();
				while(!val.done) {
					val = iterator.next();
				}
			}
		});

	}
);
