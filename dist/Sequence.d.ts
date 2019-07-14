declare type SequenceConstructor = (...args: any[]) => Sequence;
declare type Sequence = {
    read: (recycle?: any) => any;
    pipe: (next: SequenceConstructor, ...args: any[]) => Sequence;
};
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
export { Sequence, SequenceConstructor, BaseSequence as default };
