"use strict";
/* eslint-env mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __importDefault(require("./Assert"));
var Count_1 = __importDefault(require("./Count"));
var Slice_1 = __importDefault(require("./Slice"));
var Concat_1 = __importDefault(require("./Concat"));
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
describe(__filename, function () {
    it('test case 1', function () {
        Count_1.default()
            .pipe(Slice_1.default, 0, 5)
            .pipe(Concat_1.default, '')
            .pipe(Assert_1.default, function (val) { return val === '01234'; })
            .read();
    });
    it('test case 1', function () {
        Count_1.default()
            .pipe(Slice_1.default, 0, 5)
            .pipe(Concat_1.default, ' - ')
            .pipe(Assert_1.default, function (val) { return val === '0 - 1 - 2 - 3 - 4'; })
            .read();
    });
    it('test case 2', function () {
        Count_1.default()
            .pipe(Slice_1.default, 0, 1)
            .pipe(Concat_1.default, ' - ')
            .pipe(Assert_1.default, function (val) { return val === '0'; })
            .read();
    });
    var SIZE = 10000;
    var ITERATIONS = 1000;
    it('performance (sequence + concat)', function () {
        for (var i = 0; i < ITERATIONS; i++) {
            Count_1.default()
                .pipe(Slice_1.default, 0, SIZE)
                .pipe(Map_1.default, function (val) { return 0; })
                .pipe(Concat_1.default, '-')
                .pipe(Assert_1.default, function (val) { return val.length === 2 * SIZE - 1; })
                .read();
        }
    });
    it('performance (sequence + array.join)', function () {
        for (var i = 0; i < ITERATIONS; i++) {
            Count_1.default()
                .pipe(Slice_1.default, 0, SIZE)
                .pipe(Map_1.default, function (val) { return 0; })
                .pipe(ToArray_1.default)
                .pipe(Map_1.default, function (arr) { return arr.join('-'); })
                .pipe(Assert_1.default, function (val) { return val.length === 2 * SIZE - 1; })
                .read();
        }
    });
    it('performance (baseline array.join)', function () {
        for (var i = 0; i < ITERATIONS; i++) {
            var a = Array(SIZE).fill(0);
            var res = a.join('-');
            if (res.length !== 2 * SIZE - 1) {
                throw new Error();
            }
        }
    });
});
