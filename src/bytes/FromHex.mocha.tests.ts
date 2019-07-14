/* eslint-env node, mocha */

import Each from '../Each';
import Drain from '../Drain';
import FromHex from './FromHex';

describe(
	'sequences/bytes/FromHex',
	() => {

		it('test 1', () => {
			FromHex('000102030405060708090a0b0c0d0e0f')
				// .pipe(Each, console.log)
				.pipe(Drain)
				.read();
		});

	}
);
