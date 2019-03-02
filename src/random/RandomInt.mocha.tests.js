/* eslint-env node, mocha */

const {
	Assert,
	Count,
	Slice,
	From,
	Each,
	Drain,
} = require('../');

const RandomInt = require('./RandomInt');

describe(
	'sequences.random.RandomInt',
	() => {

		it('test 1', () => {
			RandomInt(0, 3)
				.pipe(Slice, 0, 9)
				// .pipe(Each, console.log)
				.pipe(Drain)
				.read();
		});

		it('performance 1', () => {
			RandomInt()
				.pipe(Slice, 1, 1000000)
				.pipe(Drain)
				.read();
		});

	}
);
