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
// import Filter from './Filter';
var Map_1 = __importDefault(require("./Map"));
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
var _array = function () {
    console.log('allocating array');
    return [];
};
describe('sequences/Map', function () {
    it('test case 1', function () {
        var stream = Count_1.default()
            // .pipe(Each, (val, i) => console.log('Each 1', val))
            .pipe(Map_1.default, function (val, i) { return val + 1; })
            // .pipe(Each, (val, i) => console.log('Each 2', val))
            .pipe(Slice_1.default, 0, 3)
            .pipe(Drain_1.default)
            .read();
        // stream = Each(stream, (val, i) => console.log('Each 1', val));
        // stream = Map(stream, (val, i) => val + 1);
        // stream = Each(stream, (val, i) => console.log('Each 2', val));
        // stream.read();
        // stream.read();
        // stream.read();
    });
    it('performance test baseline', function () {
        var arr = Count_1.default()
            .pipe(Slice_1.default, 0, 1000000)
            .pipe(Map_1.default, function (val) { return val + 1; })
            .pipe(Map_1.default, function (val) { return val + 1; })
            .pipe(Map_1.default, function (val) { return val + 1; })
            .pipe(Map_1.default, function (val) { return val + 1; })
            .pipe(Drain_1.default)
            .read();
    });
    it('performance test', function () {
        var arr = Count_1.default()
            .pipe(Slice_1.default, 0, 1000000)
            .pipe(Map_1.default, function (val) { return val + 1; })
            .pipe(Map_1.default, function (val) { return val + 1; })
            .pipe(Map_1.default, function (val) { return val + 1; })
            .pipe(Map_1.default, function (val) { return val + 1; })
            .pipe(ToArray_1.default)
            .read();
    });
    it('recycling performance test', function () {
        var arr = Count_1.default()
            .pipe(Slice_1.default, 0, 1000000)
            // .pipe(Each, (val, i) => console.log('Each 1', val))
            .pipe(Map_1.default, function (val, i, recycle) {
            var res = recycle || _array();
            res[0] = val + 1;
            return res;
        })
            // .pipe(Each, (val, i) => console.log('Each 2', val))
            .pipe(Map_1.default, function (_a, i, recycle) {
            var val = _a[0];
            var res = recycle || _array();
            res[0] = val + 1;
            return res;
        })
            // .pipe(Each, (val, i) => console.log('Each 3', val))
            .pipe(Map_1.default, function (_a, i, recycle) {
            var val = _a[0];
            var res = recycle || _array();
            res[0] = val + 1;
            return res;
        })
            // .pipe(Each, (val, i) => console.log('Each 4', val))
            .pipe(Map_1.default, function (_a, i, recycle) {
            var val = _a[0];
            var res = recycle || _array();
            res[0] = val + 1;
            return res;
        })
            // .pipe(Each, (val, i) => console.log('Each 5', val))
            .pipe(Map_1.default, function (_a, i, recycle) {
            var val = _a[0];
            var res = recycle || _array();
            res[0] = val + 1;
            return res;
        })
            // .pipe(Each, (val, i) => console.log('Each 6', val))
            .pipe(Map_1.default, function (_a, i, recycle) {
            var val = _a[0];
            return val + 1;
        })
            // .pipe(Each, (val, i) => console.log('Each 7', val))
            .pipe(ToArray_1.default)
            .read();
    });
    it('performance test control group', function () {
        var arr = Array(1000000).fill(0);
        arr = arr
            .map(function (val) { return val + 1; })
            .map(function (val) { return val + 1; })
            .map(function (val) { return val + 1; })
            .map(function (val) { return val + 1; });
    });
});
