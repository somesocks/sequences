"use strict";
/* eslint-env mocha */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Count_1 = __importDefault(require("./Count"));
var Drain_1 = __importDefault(require("./Drain"));
var Each_1 = __importDefault(require("./Each"));
var From_1 = __importDefault(require("./From"));
var Map_1 = __importDefault(require("./Map"));
var Slice_1 = __importDefault(require("./Slice"));
var ToArray_1 = __importDefault(require("./ToArray"));
var Window_1 = __importDefault(require("./Window"));
var isPositive = function (val) { return val > 0; };
describe('sequences/Window', function () {
    it('test 1', function () {
        From_1.default(1, 2, 3)
            .pipe(Window_1.default, 2)
            .pipe(Drain_1.default)
            .read();
    });
    it('test 2', function () {
        From_1.default(1, 2, 3, 4, 5)
            .pipe(Window_1.default, 3)
            .pipe(ToArray_1.default)
            .pipe(Each_1.default, console.log)
            .read();
    });
    it('test 3', function () {
        From_1.default(1, 2, 3, 4, 5)
            .pipe(Window_1.default, 3, true)
            .pipe(ToArray_1.default)
            .pipe(Each_1.default, console.log)
            .read();
    });
    it('test 4', function () {
        From_1.default(1, 2)
            .pipe(Window_1.default, 3, false)
            .pipe(ToArray_1.default)
            .pipe(Each_1.default, console.log)
            .read();
    });
    it('test 5', function () {
        From_1.default(1, 2)
            .pipe(Window_1.default, 3, true)
            .pipe(ToArray_1.default)
            .pipe(Each_1.default, console.log)
            .read();
    });
    it('performance 1', function () {
        for (var c = 0; c < 10; c++) {
            Count_1.default()
                .pipe(Slice_1.default, 1, 1000000)
                .pipe(Window_1.default, 3)
                .pipe(Map_1.default, function (_a) {
                var a = _a[0], b = _a[1], c = _a[2];
                return a + b + c;
            })
                .pipe(Drain_1.default)
                .read();
        }
    });
    it('performance (baseline)', function () {
        var inp = Array(1000000).fill(0);
        var out = Array(1000000).fill(0);
        var args = [0, 0, 0];
        var avg = function (_a) {
            var a = _a[0], b = _a[1], c = _a[2];
            return a + b + c;
        };
        for (var c = 0; c < 10; c++) {
            for (var i = 0; i < 1000000 - 3; i++) {
                args[0] = inp[i];
                args[1] = inp[i + 1];
                args[2] = inp[i + 2];
                out[i] = avg(args);
            }
        }
    });
});
