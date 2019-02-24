/* eslint-env node, mocha */

const {
	Assert,
	Count,
	Slice,
	From,
	Each,
	Drain,
} = require('./');

describe(
	'sequences.Each',
	() => {

		it('test 1', () => {
			Count()
				.pipe(Slice, 0, 4)
				.pipe(Each, console.log)
				.pipe(Drain)
				.read();
		});

		it('performance 1', () => {
			Count()
				.pipe(Slice, 1, 1000000)
				.pipe(Each, () => null)
				.pipe(Drain)
				.read();
		});

	}
);
