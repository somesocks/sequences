/* eslint-env mocha */

const {
	Assert,
	Count,
	Slice,
	From,
	Drain,
} = require('./');

describe(
	'sequences.Drain',
	() => {

		it('test 1', () => {
			Count()
				.pipe(Slice, 0, 9)
				.pipe(Drain)
				.read();
		});

		it('performance 1', () => {
			Count()
				.pipe(Slice, 1, 1000000)
				.pipe(Drain)
				.read();
		});

	}
);
