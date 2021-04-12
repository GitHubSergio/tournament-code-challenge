"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
class Summary {
    constructor(number, outPut) {
        this.number = number;
        this.outPut = outPut;
    }
    loopThroughNumber(min, max) {
        const { isMultipleOf } = this.number;
        const { print } = this.outPut;
        for (let num = min; num <= max; num++) {
            isMultipleOf(num, 3) && isMultipleOf(num, 5)
                ? print(`FizzBuzz ${num}`)
                : (isMultipleOf(num, 3)
                    ? print(`Fizz ${num}`)
                    : (isMultipleOf(num, 5)
                        ? print(`Buzz ${num}`)
                        : print(`${num}`)));
        }
    }
}
exports.Summary = Summary;
