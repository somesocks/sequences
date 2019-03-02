/* eslint-env node, mocha */

const {
	Assert,
	Count,
	Slice,
	From,
	Each,
	Drain,
} = require('../');

const XORShift32 = require('./XORShift32');

describe(
	'sequences.random.XORShift32',
	() => {

		it('test 1', () => {
			XORShift32()
				.pipe(Assert, (val) => Number.isInteger(val))
				.pipe(Slice, 0, 99)
				.pipe(Assert, (val) => Number.isInteger(val))
				// .pipe(Each, console.log)
				.pipe(Drain)
				.read();
		});

		it('performance 1', () => {
			XORShift32()
				.pipe(Slice, 1, 1000000)
				.pipe(Drain)
				.read();
		});

	}
);
