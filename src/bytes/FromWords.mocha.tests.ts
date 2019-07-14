/* eslint-env node, mocha */

import Each from '../Each';
import Drain from '../Drain';
import From from '../From';
import FromWords from './FromWords';

describe(
	'sequences/bytes/FromWords',
	() => {

		it('little-endian test', () => {
				From(0x01234567)
					.pipe(Each, console.log)
					.pipe(FromWords)
					.pipe(Each, console.log)
					.pipe(Drain)
					.read();
		});

		it('big-endian test', () => {
				From(0x01234567)
					.pipe(FromWords, false)
					.pipe(Each, console.log)
					.pipe(Drain)
					.read();
		});

	}
);
