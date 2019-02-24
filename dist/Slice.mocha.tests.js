/* eslint-env mocha */

const {
	Assert,
	Count,
	Slice,
	From,
	Drain,
} = require('./');

const isPositive = (val) => val > 0;

describe(
	'sequences.Slice',
	() => {

		it('test 1', () => {
			Count()
				.pipe(Assert, (val) => Number.isInteger(val))
				.pipe(Slice, 0, 9)
				.pipe(Assert, (val) => Number.isInteger(val))
				.pipe(Drain)
				.read();
		});

		it('performance 1', () => {
			Count()
				.pipe(Slice, 1, 1000000)
				.pipe(Assert, isPositive)
				.pipe(Drain)
				.read();
		});

	}
);
