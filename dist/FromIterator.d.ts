import { Sequence } from './types/Sequence';
declare type Iterator<T> = {
    next: () => ({
        done: boolean;
        value?: T;
    });
};
/**
*
* ```javascript
* ```
* `FromIterator` builds a sequence from an iterator
* @name FromIterator
* @param {Iterator} iterator - iterator to convert into a sequence
* @returns {Sequence}
* @memberof sequences
*/
declare function FromIterator<T>(this: any, iterator: Iterator<T>): Sequence<T>;
declare namespace FromIterator {
    var prototype: any;
}
export = FromIterator;
