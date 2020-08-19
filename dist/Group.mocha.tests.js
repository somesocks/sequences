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
// import Flatten from './Flatten';
var Group_1 = __importDefault(require("./Group"));
// import FromIterator from './FromIterator';
// import ToIterator from './ToIterator';
// import FromObject from './FromObject';
// import ToObject from './ToObject';
// import FromSet from './FromSet';
// import ToSet from './ToSet';
describe('sequences/Group', function () {
    it('test 1', function () {
        var res = Count_1.default()
            .pipe(Slice_1.default, 0, 99)
            .pipe(Group_1.default, 10)
            .pipe(Drain_1.default)
            .read();
    });
    it('performance 1', function () {
        var res = Count_1.default()
            .pipe(Slice_1.default, 0, 1000000)
            .pipe(Group_1.default, 10)
            .pipe(Drain_1.default)
            .read();
    });
});
