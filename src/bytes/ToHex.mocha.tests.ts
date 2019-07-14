/* eslint-env node, mocha */

import Each from '../Each';
import Drain from '../Drain';
import From from '../From';
import FromHex from './FromHex';
import ToHex from './ToHex';


describe(
	'sequences/bytes/ToHex',
	() => {

		it('test 1', () => {
			FromHex('000102030405060708090a0b0c0d0e0f')
				.pipe(Each, console.log)
				.pipe(ToHex)
				.pipe(Each, console.log)
				.pipe(Drain)
				.read();
		});

	}
);
