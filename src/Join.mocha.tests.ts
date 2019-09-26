/* eslint-env mocha */

import Join from './Join';
import Drain from "./Drain";
import Each from "./Each";

describe(
	'sequences/Join',
	() => {
		it('joins two array of numbers', () => {
			const result = Join([1, 2, 3], [4, 5, 6])
				.pipe(Each, (item) => console.log('item', item))
				.pipe(Drain)
				.read();
		});
	}
);
