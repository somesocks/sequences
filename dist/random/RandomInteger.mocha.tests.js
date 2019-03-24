/* eslint-env node, mocha */

const {
	Assert,
	Count,
	Slice,
	From,
	Each,
	Drain,
} = require('../');

const RandomInteger = require('./RandomInteger');

describe(
	'sequences.random.RandomInteger',
	() => {

		it('test 1', () => {
			RandomInteger(0, 3)
				.pipe(Slice, 0, 9)
				// .pipe(Each, console.log)
				.pipe(Drain)
				.read();
		});

		it('performance 1', () => {
			RandomInteger()
				.pipe(Slice, 1, 1000000)
				.pipe(Drain)
				.read();
		});

	}
);
