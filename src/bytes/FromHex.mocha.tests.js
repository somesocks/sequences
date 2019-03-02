/* eslint-env node, mocha */

const {
	Assert,
	Count,
	Slice,
	From,
	Each,
	Drain,
} = require('../');

const FromHex = require('./FromHex');
const ToHex = require('./ToHex');

describe(
	'sequences.bytes.FromHex',
	() => {

		it('test 1', () => {
			FromHex('000102030405060708090a0b0c0d0e0f')
				.pipe(Each, console.log)
				.pipe(Drain)
				.read();
		});

	}
);
