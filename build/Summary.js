"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var Summary = /** @class */ (function () {
    function Summary(number, outPut) {
        this.number = number;
        this.outPut = outPut;
    }
    Summary.prototype.loopThroughNumber = function () {
        var isMultipleOf = this.number.isMultipleOf;
        var print = this.outPut.print;
        for (var num = 1; num <= 100; num++) {
            isMultipleOf(num, 3) && isMultipleOf(num, 5)
                ? print("FizzBuzz " + num)
                : (isMultipleOf(num, 3)
                    ? print("Fizz " + num)
                    : (isMultipleOf(num, 5)
                        ? print("Buzz " + num)
                        : print("" + num)));
        }
    };
    return Summary;
}());
exports.Summary = Summary;
