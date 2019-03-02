/* eslint-env node, mocha */

const {
	Assert,
	Count,
	Slice,
	From,
	Each,
	Drain,
} = require('../');

const RandomSelection = require('./RandomSelection');

describe(
	'sequences.random.RandomSelection',
	() => {

		it('test 1', () => {
			RandomSelection(['a', 'b', 'c'])
				.pipe(Slice, 0, 9)
				// .pipe(Each, console.log)
				.pipe(Drain)
				.read();
		});

		it('performance 1', () => {
			RandomSelection(['a', 'b', 'c'])
				.pipe(Slice, 1, 1000000)
				.pipe(Drain)
				.read();
		});

	}
);
