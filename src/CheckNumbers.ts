import {MultipleOf} from "./Summary";

export class CheckNumbers implements MultipleOf {
  isMultipleOf(number: number, multipleOf: number): boolean {
    return number % multipleOf === 0
  }
}
