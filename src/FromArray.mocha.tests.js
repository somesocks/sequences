/* eslint-env mocha */

const {
	Assert,
	Count,
	Slice,
	From,
	FromArray,
	Drain,
} = require('./');

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

	}
);
