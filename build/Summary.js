"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
// Version with no constructor injection - relies on interfaces
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
                ? print(`FizzBuzz`)
                : (isMultipleOf(num, 3)
                    ? print(`Fizz`)
                    : (isMultipleOf(num, 5)
                        ? print(`Buzz`)
                        : print(`${num}`)));
        }
    }
}
exports.Summary = Summary;
/*export class Summary {
  private checkNumbers: CheckNumbers
  private outPut: ConsoleReport;

  constructor(@Inject checkNumbers: CheckNumbers, @Inject outPut: ConsoleReport) {
    this.checkNumbers = checkNumbers;
    this.outPut = outPut;
  }

  loopThroughNumber(min: number, max: number): void {
    const {isMultipleOf} = this.checkNumbers
    const {print} = this.outPut

    for (let num = min; num <= max; num++) {
      isMultipleOf(num, 3) && isMultipleOf(num, 5)
        ? print(`FizzBuzz`)
        : (isMultipleOf(num, 3)
        ? print(`Fizz`)
        : (isMultipleOf(num, 5)
          ? print(`Buzz`)
          : print(`${num}`)))
    }
  }
}*/
