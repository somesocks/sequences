/* eslint-env node, mocha */

const {
	Assert,
	Count,
	Each,
	From,
	Slice,
	ToArray,
	ToObject,
	Drain,
} = require('./');

describe(
	'sequences.ToObject',
	() => {

		it('test 1', () => {
			From({ key: 'a', value: 1 }, { key: 'b', value: 2 })
				.pipe(Each, console.log)
				.pipe(ToObject)
				.pipe(Each, console.log)
				.read();
		});

	}
);
