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
var Each_1 = __importDefault(require("./Each"));
// import Filter from './Filter';
// import FromArray from './FromArray';
var ToArray_1 = __importDefault(require("./ToArray"));
// import FromBlocks from './FromBlocks';
// import ToBlocks from './ToBlocks';
// import FromIterator from './FromIterator';
// import ToIterator from './ToIterator';
var FromObject_1 = __importDefault(require("./FromObject"));
// import ToObject from './ToObject';
// import FromSet from './FromSet';
// import ToSet from './ToSet';
describe('sequences.FromObject', function () {
    it('test 1', function () {
        FromObject_1.default({ a: 1, b: 2 })
            .pipe(Each_1.default, console.log)
            .pipe(ToArray_1.default)
            .read();
    });
});
