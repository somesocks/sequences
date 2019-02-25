/* eslint-env node, mocha */

const {
	Assert,
	Count,
	Slice,
	Each,
	From,
	FromArray,
	FromObject,
	ToArray,
	Drain,
} = require('./');

const isPositive = (val) => val > 0;

describe(
	'sequences.FromObject',
	() => {

		it('test 1', () => {
			FromObject({ a: 1, b: 2 })
				.pipe(Each, console.log)
				.pipe(ToArray)
				.read();
		});

	}
);
