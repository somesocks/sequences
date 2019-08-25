"use strict";
/* eslint-env mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __importDefault(require("./Assert"));
var Count_1 = __importDefault(require("./Count"));
var Slice_1 = __importDefault(require("./Slice"));
var From_1 = __importDefault(require("./From"));
var Drain_1 = __importDefault(require("./Drain"));
// import Each from './Each';
// import Filter from './Filter';
var Replace_1 = __importDefault(require("./Replace"));
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
describe('sequences/Replace', function () {
    it('test case 1', function () {
        var stream = From_1.default(1, -2, 3)
            // .pipe(Each, (val, i) => console.log('Each 1', val))
            .pipe(Replace_1.default, function (val) { return val < 0; }, function (val) { return -val; })
            // .pipe(Each, (val, i) => console.log('Each 1', val))
            .pipe(ToArray_1.default)
            .pipe(Assert_1.default, function (val) { return val.length === 3; })
            .pipe(Assert_1.default, function (val) { return val[0] === 1; })
            .pipe(Assert_1.default, function (val) { return val[1] === 2; })
            .pipe(Assert_1.default, function (val) { return val[2] === 3; })
            .pipe(Drain_1.default)
            .read();
    });
    it('performance test', function () {
        var arr = Count_1.default()
            .pipe(Slice_1.default, 0, 1000000)
            .pipe(Replace_1.default, function (val) { return val > 0; }, function (val) { return -val; })
            .pipe(ToArray_1.default)
            // .pipe(Drain)
            .read();
    });
});
