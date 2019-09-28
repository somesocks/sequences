import { Sequence } from './types/Sequence';
/**
* `Sequence` is the base sequence class.
* it should always be subclassed.
* sequence constructors should never require new.
* @name Sequence
* @class
* @constructor
* @memberof sequences
*/
declare function BaseSequence(this: any): Sequence;
export default BaseSequence;
