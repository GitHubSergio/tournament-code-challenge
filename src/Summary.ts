import {Inject} from 'typescript-ioc'
import { CheckNumbers } from './CheckNumbers';
import { ConsoleReport } from './ConsoleReport';

export interface OutPut {
  print(report: string): void;
}

export interface MultipleOf {
  isMultipleOf(number: number, multipleOf: number): boolean;
}

// Version with no constructor injection - relies on interfaces
/*export class Summary {
  constructor(public number: MultipleOf, public outPut: OutPut) {}

  loopThroughNumber(min: number, max: number): void {
    const {isMultipleOf} = this.number
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

export class Summary {
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
}
