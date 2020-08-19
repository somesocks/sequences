/* eslint-env mocha */

import Assert from './Assert';
import Count from './Count';
import Slice from './Slice';
import From from './From';
import Drain from './Drain';
import Each from './Each';
import ToArray from './ToArray';
import Map from './Map';
import Filter from './Filter';
import Deduplicate from './Deduplicate';

describe(
	'sequences/Deduplicate',
	() => {
		it('test case 1', () => {
			Count()
				.pipe(Slice, 0, 50)
				.pipe<number>(Map, (val) => val % 4)
				.pipe(Deduplicate)
				// .pipe(Each, console.log)
				.pipe(ToArray)
				.pipe(Assert, (val) => val.length === 4)
				.pipe(Assert, (val) => val[0] === 0)
				.pipe(Assert, (val) => val[1] === 1)
				.pipe(Assert, (val) => val[2] === 2)
				.pipe(Assert, (val) => val[3] === 3)
				.read();
		});

		it('performance test case 1', () => {
			Count()
				.pipe(Slice, 0, 1000000)
				.pipe<number>(Map, (val) => val % 4)
				.pipe(Deduplicate)
				// .pipe(Each, console.log)
				.pipe(ToArray)
				.pipe(Assert, (val) => val.length === 4)
				.pipe(Assert, (val) => val[0] === 0)
				.pipe(Assert, (val) => val[1] === 1)
				.pipe(Assert, (val) => val[2] === 2)
				.pipe(Assert, (val) => val[3] === 3)
				.read();
		});

	}
);
