import { Sequence } from '../types/Sequence';
/**
*
* ```javascript
*
* let RandomBoolean = require('sequences/random/RandomBoolean');
**
* ```
* `RandomBoolean` is a Sequence pseudo-random number generator that returns a random boolean.
* @name RandomBoolean
* @param {number} seed - an optional 32 bit seed
* @returns {Sequence}
* @memberof sequences.random
*/
declare function RandomBoolean(seed?: number): Sequence<boolean>;
export = RandomBoolean;
