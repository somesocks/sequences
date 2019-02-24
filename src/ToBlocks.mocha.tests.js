/* eslint-env mocha */

const {
	Expand,
	Each,
	Filter,
	Count,
	Slice,
	ToArray,
	ToBlocks,
	Drain,
} = require('./');

describe(
	'sequences.ToBlocks',
	() => {

		it('test 1', () => {
			let seq = Count();
			seq = Slice(seq, 0, 99);
			seq = ToBlocks(seq, 10);
			// seq = Each(seq, console.log);
			seq = Drain(seq);

			seq.read();
		});

		it('performance 1', () => {
			let seq = Count();
			seq = Slice(seq, 0, 1000000);
			seq = ToBlocks(seq, 10);
			seq = Drain(seq);

			seq.read();
		});

	}
);
