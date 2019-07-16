"use strict";
/* eslint-env mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import Assert from './Assert';
var Count_1 = __importDefault(require("./Count"));
var Slice_1 = __importDefault(require("./Slice"));
// import Splice from './Splice';
// import From from './From';
var Drain_1 = __importDefault(require("./Drain"));
// import Each from './Each';
// import Filter from './Filter';
// import Map from './Map';
// import Reduce from './Reduce';
// import FromArray from './FromArray';
// import ToArray from './ToArray';
// import FromBlocks from './FromBlocks';
var ToBlocks_1 = __importDefault(require("./ToBlocks"));
// import FromIterator from './FromIterator';
// import ToIterator from './ToIterator';
// import FromObject from './FromObject';
// import ToObject from './ToObject';
// import FromSet from './FromSet';
// import ToSet from './ToSet';
describe('sequences/ToBlocks', function () {
    it('test 1', function () {
        var seq = Count_1.default();
        seq = Slice_1.default(seq, 0, 99);
        seq = ToBlocks_1.default(seq, 10);
        // seq = Each(seq, console.log);
        seq = Drain_1.default(seq);
        seq.read();
    });
    it('performance 1', function () {
        var seq = Count_1.default();
        seq = Slice_1.default(seq, 0, 1000000);
        seq = ToBlocks_1.default(seq, 10);
        seq = Drain_1.default(seq);
        seq.read();
    });
});
