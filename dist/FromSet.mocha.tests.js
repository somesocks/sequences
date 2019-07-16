"use strict";
/* eslint-env node, mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import Assert from './Assert';
// import Count from './Count';
// import Slice from './Slice';
// import From from './From';
// import Drain from './Drain';
// import Each from './Each';
// import Filter from './Filter';
// import FromArray from './FromArray';
var ToArray_1 = __importDefault(require("./ToArray"));
// import FromBlocks from './FromBlocks';
// import ToBlocks from './ToBlocks';
// import FromIterator from './FromIterator';
// import ToIterator from './ToIterator';
// import FromObject from './FromObject';
// import ToObject from './ToObject';
var FromSet_1 = __importDefault(require("./FromSet"));
// import ToSet from './ToSet';
describe('sequences/FromSet', function () {
    it('test 1', function () {
        FromSet_1.default(new Set([1, 2, 3]))
            // .pipe(Each, console.log)
            .pipe(ToArray_1.default)
            // .pipe(Each, console.log)
            .read();
    });
});
