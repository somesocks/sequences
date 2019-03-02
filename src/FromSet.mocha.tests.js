/* eslint-env node, mocha */

const {
	Assert,
	Count,
	Slice,
	Each,
	From,
	FromArray,
	FromSet,
	ToArray,
	Drain,
} = require('./');

const isPositive = (val) => val > 0;

describe(
	'sequences.FromSet',
	() => {

		it('test 1', () => {
			FromSet(new Set([1, 2, 3]))
				// .pipe(Each, console.log)
				.pipe(ToArray)
				// .pipe(Each, console.log)
				.read();
		});

	}
);
