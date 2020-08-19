import { Sequence } from '../types/Sequence';
/**
*
* ```javascript
*
* let RandomSelection = require('sequences/random/RandomSelection');
**
* ```
* `RandomSelection` is a Sequence generator that returns a random relection from the choices.
* @name RandomSelection
* @param {Array} choices - the selection choices
* @param {number} seed - an optional 32 bit seed
* @returns {Sequence}
* @memberof sequences.random
*/
declare function RandomSelection<T>(choices: T[], seed?: number): Sequence<T>;
export = RandomSelection;
