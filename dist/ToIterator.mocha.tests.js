/* eslint-env node, mocha */

const {
	Expand,
	Each,
	FromIterator,
	Count,
	Slice,
	ToIterator,
	ToArray,
	Drain,
} = require('./');

describe(
	'sequences.ToIterator',
	() => {

		it('test 1', () => {
			let iter = Count()
				.pipe(Slice, 0, 10)
				.pipe(ToIterator);

			let res = FromIterator(iter)
				.pipe(ToArray)
				.read();

			console.log('res', res);
		});

	}
);
