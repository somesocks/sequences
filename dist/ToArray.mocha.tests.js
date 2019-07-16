"use strict";
/* eslint-env node, mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __importDefault(require("./Assert"));
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
var ToArray_1 = __importDefault(require("./ToArray"));
// import FromBlocks from './FromBlocks';
// import ToBlocks from './ToBlocks';
// import FromIterator from './FromIterator';
// import ToIterator from './ToIterator';
// import FromObject from './FromObject';
// import ToObject from './ToObject';
// import FromSet from './FromSet';
// import ToSet from './ToSet';
describe('sequences/ToArray', function () {
    it('test 1', function () {
        Count_1.default()
            .pipe(Assert_1.default, function (val) { return Number.isInteger(val); })
            .pipe(Slice_1.default, 0, 99)
            .pipe(Assert_1.default, function (val) { return Number.isInteger(val); })
            // .pipe(Each, console.log)
            .pipe(ToArray_1.default)
            // .pipe(Each, console.log)
            .pipe(Assert_1.default, function (val) { return Array.isArray(val); })
            .pipe(Assert_1.default, function (val) { return val.length === 99; })
            .pipe(Drain_1.default)
            .read();
    });
    it('performance 1', function () {
        Count_1.default()
            .pipe(Slice_1.default, 0, 1000000)
            .pipe(ToArray_1.default, 10)
            .pipe(Drain_1.default)
            .read();
    });
});
