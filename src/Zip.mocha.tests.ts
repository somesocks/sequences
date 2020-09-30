/* eslint-env mocha */
import Assert from './Assert';
import Count from './Count';
import Drain from './Drain';
import Each from './Each';
import From from './From';
import Zip from './Zip';
import Slice from './Slice';
import ToArray from './ToArray';

describe(
	'sequences/Zip',
	() => {

		it(
			'handles two arrays of numbers',
			() => {
				const result = Zip([1, 2, 3], [4, 5, 6])
					// .pipe(Each, (item) => console.log('item', item))
					.pipe(ToArray)
					.pipe(Each, (item) => console.log('item', item))
					.pipe(Assert, (results) => results.length === 3)
					.read();
			}
		);

    it(
			'handles an array and a sequence of numbers',
			() => {
				const result = Zip([1, 2, 3], From(4, 5, 6))
					// .pipe(Each, (item) => console.log('item', item))
					.pipe(ToArray)
					.pipe(Each, (item) => console.log('item', item))
					.pipe(Assert, (results) => results.length === 3)
					.read();
			}
		);

		it(
			'handles empty arrays correctly',
			() => {
				const result = Zip([], [])
					// .pipe(Each, (item) => console.log('item', item))
					.pipe(ToArray)
          .pipe(Each, (item) => console.log('item', item))
					.pipe(Assert, (results) => results.length === 0)
					.read();
			}
		);

		it(
			'handles empty arrays correctly 2',
			() => {
				const result = Zip([1, 2, 3], [])
					// .pipe(Each, (item) => console.log('item', item))
					.pipe(ToArray)
          .pipe(Each, (item) => console.log('item', item))
					.pipe(Assert, (results) => results.length === 3)
					.read();
			}
		);

		it(
			'handles empty arrays correctly 3',
			() => {
				const result = Zip([], [1, 2, 3])
					// .pipe(Each, (item) => console.log('item', item))
					.pipe(ToArray)
          .pipe(Each, (item) => console.log('item', item))
					.pipe(Assert, (results) => results.length === 3)
					.read();
			}
		);

		it(
			'handles sequences correctly',
			() => {
				const result = Zip(From(1, 2, 3), From(4, 5, 6))
					// .pipe(Each, (item) => console.log('item', item))
					.pipe(ToArray)
          .pipe(Each, (item) => console.log('item', item))
					.pipe(Assert, (results) => results.length === 3)
					.read();
			}
		);

		const PERF_ARRAY = Array(10000).fill(0);

		it(
			'performance',
			() => {
				const result = Zip(
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
					arr[0] = PERF_ARRAY[i];
					arr[1] = PERF_ARRAY[i];
				}
			}
		);

	}

);

describe(
	'sequences/Zip.Short',
	() => {

		it(
			'handles two arrays of numbers',
			() => {
				const result = Zip.Short([1, 2, 3], [4, 5, 6])
					// .pipe(Each, (item) => console.log('item', item))
					.pipe(ToArray)
					.pipe(Each, (item) => console.log('item', item))
					.pipe(Assert, (results) => results.length === 3)
					.read();
			}
		);


    it(
			'handles an array and a sequence of numbers',
			() => {
				const result = Zip.Short([1, 2, 3], From(4, 5, 6))
					// .pipe(Each, (item) => console.log('item', item))
					.pipe(ToArray)
					.pipe(Each, (item) => console.log('item', item))
					.pipe(Assert, (results) => results.length === 3)
					.read();
			}
		);

		it(
			'handles empty arrays correctly',
			() => {
				const result = Zip.Short([], [])
					// .pipe(Each, (item) => console.log('item', item))
					.pipe(ToArray)
          .pipe(Each, (item) => console.log('item', item))
					.pipe(Assert, (results) => results.length === 0)
					.read();
			}
		);

		it(
			'handles empty arrays correctly 2',
			() => {
				const result = Zip.Short([1, 2, 3], [])
					// .pipe(Each, (item) => console.log('item', item))
					.pipe(ToArray)
          .pipe(Each, (item) => console.log('item', item))
					.pipe(Assert, (results) => results.length === 0)
					.read();
			}
		);

		it(
			'handles empty arrays correctly 3',
			() => {
				const result = Zip.Short([], [1, 2, 3])
					// .pipe(Each, (item) => console.log('item', item))
					.pipe(ToArray)
          .pipe(Each, (item) => console.log('item', item))
					.pipe(Assert, (results) => results.length === 0)
					.read();
			}
		);

		it(
			'handles sequences correctly',
			() => {
				const result = Zip.Short(From(1, 2, 3), From(4, 5, 6))
					// .pipe(Each, (item) => console.log('item', item))
					.pipe(ToArray)
          .pipe(Each, (item) => console.log('item', item))
					.pipe(Assert, (results) => results.length === 3)
					.read();
			}
		);

		const PERF_ARRAY = Array(10000).fill(0);

		it(
			'performance',
			() => {
				const result = Zip.Short(
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
					arr[0] = PERF_ARRAY[i];
					arr[1] = PERF_ARRAY[i];
				}
			}
		);

	}

);
