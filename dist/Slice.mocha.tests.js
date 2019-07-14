"use strict";
/* eslint-env mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __importDefault(require("./Assert"));
var Count_1 = __importDefault(require("./Count"));
var Slice_1 = __importDefault(require("./Slice"));
// import From from './From';
var Drain_1 = __importDefault(require("./Drain"));
// import Each from './Each';
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
// import ToSet from './ToSet';
var isPositive = function (val) { return val > 0; };
describe('sequences.Slice', function () {
    it('test 1', function () {
        Count_1.default()
            .pipe(Assert_1.default, function (val) { return Number.isInteger(val); })
            .pipe(Slice_1.default, 0, 9)
            .pipe(Assert_1.default, function (val) { return Number.isInteger(val); })
            .pipe(Drain_1.default)
            .read();
    });
    it('performance 1', function () {
        Count_1.default()
            .pipe(Slice_1.default, 1, 1000000)
            .pipe(Assert_1.default, isPositive)
            .pipe(Drain_1.default)
            .read();
    });
});
