/* eslint-env mocha */

import { Sequence, SequenceTransformer, SQT } from './types';


import Assert from './Assert';
import Count from './Count';
import Drain from './Drain';
import Each from './Each';
import From from './From';
import Map from './Map';
import Slice from './Slice';
import ToArray from './ToArray';
import Window from './Window';

const isPositive = (val) => val > 0;

describe(
	'sequences/Window',
	() => {

		it('test 1', () => {
			From(1, 2, 3)
				.pipe(Window, 2)
				.pipe(Drain)
				.read();
		});

		it('test 2', () => {
      From(1, 2, 3, 4, 5)
        .pipe(Window, 3)
        .pipe(ToArray)
        .pipe(Each, console.log)
        .read();
		});

    it('test 3', () => {
      From(1, 2, 3, 4, 5)
        .pipe(Window, 3, true)
        .pipe(ToArray)
        .pipe(Each, console.log)
        .read();
		});

    it('test 4', () => {
      From(1, 2)
        .pipe(Window, 3, false)
        .pipe(ToArray)
        .pipe(Each, console.log)
        .read();
		});

    it('test 5', () => {
      From(1, 2)
        .pipe(Window, 3, true)
        .pipe(ToArray)
        .pipe(Each, console.log)
        .read();
		});

		it('performance 1', () => {
      for (let c = 0; c < 10; c++) {
        Count()
          .pipe(Slice, 1, 1000000)
          .pipe(Window, 3)
          .pipe(Map, ([a, b, c]) => a + b + c)
          .pipe(Drain)
          .read();
      }
		});

    it('performance (baseline)', () => {
      const inp = Array(1000000).fill(0);
      const out = Array(1000000).fill(0);
      const args : [number, number, number] = [0, 0, 0];
      const avg = ([a, b, c]) => a + b + c;
      for (let c = 0; c < 10; c++) {
        for (let i = 0; i < 1000000 - 3; i++) {
          args[0] = inp[i];
          args[1] = inp[i+1];
          args[2] = inp[i+2];
          out[i] = avg(args);
        }
      }
		});

	}
);
