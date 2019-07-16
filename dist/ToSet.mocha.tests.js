"use strict";
/* eslint-env node, mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import Assert from './Assert';
// import Count from './Count';
// import Slice from './Slice';
// import Splice from './Splice';
var From_1 = __importDefault(require("./From"));
// import Filter from './Filter';
// import Map from './Map';
// import Reduce from './Reduce';
// import FromArray from './FromArray';
// import ToArray from './ToArray';
// import FromBlocks from './FromBlocks';
// import ToBlocks from './ToBlocks';
// import FromIterator from './FromIterator';
// import ToIterator from './ToIterator';
// import FromObject from './FromObject';
// import ToObject from './ToObject';
// import FromSet from './FromSet';
var ToSet_1 = __importDefault(require("./ToSet"));
describe('sequences/ToSet', function () {
    it('test 1', function () {
        From_1.default(1, 2, 3)
            // .pipe(Each, console.log)
            .pipe(ToSet_1.default)
            // .pipe(Each, console.log)
            .read();
    });
});
