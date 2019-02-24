/* eslint-env mocha */

const {
	Expand,
	Each,
	Filter,
	Count,
	Slice,

	From,
	FromArray,
	ToArray,

	FromBlocks,
	ToBlocks,

	Drain,
} = require('./');

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
