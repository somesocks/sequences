/* eslint-env mocha */

import Assert from './Assert';
import Count from './Count';
import Slice from './Slice';
import Concat from './Concat';
// import From from './From';
import Each from './Each';
// import Filter from './Filter';
import Map from './Map';
// import FromArray from './FromArray';
import ToArray from './ToArray';
// import FromBlocks from './FromBlocks';
// import ToBlocks from './ToBlocks';
// import FromIterator from './FromIterator';
// import ToIterator from './ToIterator';
// import FromObject from './FromObject';
// import ToObject from './ToObject';
// import FromSet from './FromSet';
// import ToSet from './ToSet';

describe(
  __filename,
	() => {
		it('test case 1', () => {
			Count()
				.pipe(Slice, 0, 5)
        .pipe(Concat, '')
        .pipe(Assert, (val) => val === '01234')
        .read();
		});

    it('test case 1', () => {
			Count()
				.pipe(Slice, 0, 5)
        .pipe(Concat, ' - ')
        .pipe(Assert, (val) => val === '0 - 1 - 2 - 3 - 4')
        .read();
		});

    it('test case 2', () => {
			Count()
				.pipe(Slice, 0, 1)
        .pipe(Concat, ' - ')
        .pipe(Assert, (val) => val === '0')
        .read();
		});

    const SIZE = 10000;
    const ITERATIONS = 1000;

    it('performance (sequence + concat)', () => {
      for (let i = 0; i < ITERATIONS; i++) {
        Count()
          .pipe(Slice, 0, SIZE)
          .pipe(Map, (val) => 0)
          .pipe(Concat, '-')
          .pipe(Assert, (val) => val.length === 2*SIZE - 1)
          .read();
      }
		});

    it('performance (sequence + array.join)', () => {
      for (let i = 0; i < ITERATIONS; i++) {
        Count()
          .pipe(Slice, 0, SIZE)
          .pipe(Map, (val) => 0)
          .pipe(ToArray)
          .pipe(Map, (arr) => arr.join('-'))
          .pipe(Assert, (val) => val.length === 2*SIZE - 1)
          .read();
      }
		});

    it('performance (baseline array.join)', () => {
      for (let i = 0; i < ITERATIONS; i++) {
        const a = Array(SIZE).fill(0);
        const res = a.join('-');
        if (res.length !== 2*SIZE - 1) { throw new Error(); }
      }
		});

	}
);
