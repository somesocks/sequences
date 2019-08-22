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
import Sort from './Sort';

describe(
	'sequences/Sort',
	() => {
		it('test case 1', () => {
			From(3, 2, 1, 0)
				// .pipe(Each, console.log)
				.pipe(Sort)
				// .pipe(Each, console.log)
				.pipe(ToArray)
				// .pipe(Each, console.log)
				.pipe(Assert, (val) => val.length === 4)
				.pipe(Assert, (val) => val[0] === 0)
				.pipe(Assert, (val) => val[1] === 1)
				.pipe(Assert, (val) => val[2] === 2)
				.pipe(Assert, (val) => val[3] === 3)
				.read();
		});

	}
);
