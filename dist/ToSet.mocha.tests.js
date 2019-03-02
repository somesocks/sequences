/* eslint-env node, mocha */

const {
	Assert,
	Count,
	Each,
	From,
	Slice,
	ToArray,
	ToSet,
	Drain,
} = require('./');

describe(
	'sequences.ToSet',
	() => {

		it('test 1', () => {
			From(1, 2, 3)
				// .pipe(Each, console.log)
				.pipe(ToSet)
				// .pipe(Each, console.log)
				.read();
		});

	}
);
