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
	'sequences.From',
	() => {

		it('test 1', () => {
			From(1, 2, 3)
				.pipe(Assert, isPositive)
				.pipe(Drain)
				.read();
		});

	}
);
