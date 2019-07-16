"use strict";
/* eslint-env node, mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import Assert from './Assert';
// import Count from './Count';
// import Slice from './Slice';
var Splice_1 = __importDefault(require("./Splice"));
var From_1 = __importDefault(require("./From"));
var Drain_1 = __importDefault(require("./Drain"));
// import Each from './Each';
// import Filter from './Filter';
// import Map from './Map';
// import Reduce from './Reduce';
// import FromArray from './FromArray';
var ToArray_1 = __importDefault(require("./ToArray"));
// import FromBlocks from './FromBlocks';
// import ToBlocks from './ToBlocks';
// import FromIterator from './FromIterator';
// import ToIterator from './ToIterator';
// import FromObject from './FromObject';
// import ToObject from './ToObject';
// import FromSet from './FromSet';
// import ToSet from './ToSet';
describe('sequences/Splice', function () {
    it('test case 1', function () {
        Splice_1.default(From_1.default(1, 2, 3), From_1.default(4, 5, 6), From_1.default(7, 8, 9))
            // .pipe(Each, (val, i) => console.log(val, i))
            .pipe(ToArray_1.default)
            // .pipe(Each, (val, i) => console.log(val, i))
            .pipe(Drain_1.default)
            .read();
    });
});
