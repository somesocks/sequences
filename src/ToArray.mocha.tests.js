/* eslint-env node, mocha */

const {
	Assert,
	Count,
	Each,
	Slice,
	ToArray,
	Drain,
} = require('./');

describe(
	'sequences.ToArray',
	() => {

		it('test 1', () => {
			Count()
				.pipe(Assert, (val) => Number.isInteger(val))
				.pipe(Slice, 0, 99)
				.pipe(Assert, (val) => Number.isInteger(val))
				// .pipe(Each, console.log)
				.pipe(ToArray)
				// .pipe(Each, console.log)
				.pipe(Assert, (val) => Array.isArray(val))
				.pipe(Assert, (val) => val.length === 99)
				.pipe(Drain)
				.read();
		});

		it('performance 1', () => {
			Count()
				.pipe(Slice, 0, 1000000)
				.pipe(ToArray, 10)
				.pipe(Drain)
				.read();
		});

	}
);
