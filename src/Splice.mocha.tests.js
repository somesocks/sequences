/* eslint-env node, mocha */

const {
	Count,
	Slice,
	Splice,
	From,
	ToArray,
	Drain,
	Each,
} = require('./');

describe(
	'sequences.Splice',
	() => {
		it('test case 1', () => {
			Splice(
				From(1, 2, 3),
				From(4, 5, 6),
				From(7, 8, 9)
			)
				// .pipe(Each, (val, i) => console.log(val, i))
				.pipe(ToArray)
				// .pipe(Each, (val, i) => console.log(val, i))
				.pipe(Drain)
				.read();
		});
	}
);
