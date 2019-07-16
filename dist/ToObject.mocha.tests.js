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
var ToObject_1 = __importDefault(require("./ToObject"));
// import FromSet from './FromSet';
// import ToSet from './ToSet';
describe('sequences/ToObject', function () {
    it('test 1', function () {
        From_1.default({ key: 'a', value: 1 }, { key: 'b', value: 2 })
            // .pipe(Each, console.log)
            .pipe(ToObject_1.default)
            // .pipe(Each, console.log)
            .read();
    });
});
