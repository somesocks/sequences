"use strict";
/* eslint-env mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import Assert from './Assert';
var Count_1 = __importDefault(require("./Count"));
var Slice_1 = __importDefault(require("./Slice"));
// import From from './From';
var Drain_1 = __importDefault(require("./Drain"));
// import Each from './Each';
// import Filter from './Filter';
// import Map from './Map';
var Reduce_1 = __importDefault(require("./Reduce"));
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
describe('sequences/Reduce', function () {
    it('test case 1', function () {
        Count_1.default()
            .pipe(Slice_1.default, 0, 10)
            .pipe(Reduce_1.default, function (state, val) { return state + val; }, 0)
            .pipe(Drain_1.default)
            .read();
    });
});
