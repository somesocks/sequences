/* eslint-env mocha */
import Assert from './Assert';
import Count from './Count';
import Drain from './Drain';
import Each from './Each';
import From from './From';
import Join from './Join';
import Slice from './Slice';
import ToArray from './ToArray';

describe(
	'sequences/Join',
	() => {

		it(
			'handles two arrays of numbers',
			() => {
				const result = Join([1, 2, 3], [4, 5, 6])
					// .pipe(Each, (item) => console.log('item', item))
					.pipe(ToArray)
					.pipe(Assert, (results) => results.length === 9)
					.read();
			}
		);

		it(
			'handles empty arrays correctly',
			() => {
				const result = Join([], [])
					// .pipe(Each, (item) => console.log('item', item))
					.pipe(ToArray)
					.pipe(Assert, (results) => results.length === 0)
					.read();
			}
		);

		it(
			'handles sequences correctly',
			() => {
				const result = Join(From(1, 2, 3), From(4, 5, 6))
					// .pipe(Each, (item) => console.log('item', item))
					.pipe(ToArray)
					.pipe(Assert, (results) => results.length === 9)
					.read();
			}
		);



		const PERF_ARRAY = Array(2000);

		it(
			'performance',
			() => {
				const result = Join(
						PERF_ARRAY,
						PERF_ARRAY,
					)
					// .pipe(Each, (item) => console.log('item', item))
					.pipe(Drain)
					.read();
			}
		);

		it(
			'performance control group',
			() => {
				let arr : any[] = [];

				for (let i = 0; i < PERF_ARRAY.length; i++) {
					for (let j = 0; j < PERF_ARRAY.length; j++) {
						arr[0] = PERF_ARRAY[i];
						arr[1] = PERF_ARRAY[j];
					}
				}

			}
		);

	}

);
