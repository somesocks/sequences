/* eslint-env mocha */

const {
	Count,
	Each,
	Map,
	Slice,
	Drain,
	ToArray,
} = require('./');

describe(
	'sequences.Map',
	() => {
		it('test case 1', () => {
			const stream = Count()
				// .pipe(Each, (val, i) => console.log('Each 1', val))
				.pipe(Map, (val, i) => val + 1)
				// .pipe(Each, (val, i) => console.log('Each 2', val))
				.pipe(Slice, 0, 3)
				.pipe(Drain)
				.read();

			// stream = Each(stream, (val, i) => console.log('Each 1', val));
			// stream = Map(stream, (val, i) => val + 1);
			// stream = Each(stream, (val, i) => console.log('Each 2', val));

			// stream.read();
			// stream.read();
			// stream.read();

		});

		it('performance test', () => {
			const arr = Count()
				.pipe(Slice, 0, 1000000)
				.pipe(Map, (val) => val + 1)
				.pipe(Map, (val) => val + 1)
				.pipe(Map, (val) => val + 1)
				.pipe(Map, (val) => val + 1)
				.pipe(ToArray)
				.read();
		});

		it('performance test control group', () => {
			let arr = Array(1000000).fill(0);
			arr = arr
				.map((val) => val + 1)
				.map((val) => val + 1)
				.map((val) => val + 1)
				.map((val) => val + 1);
		});

	}
);
