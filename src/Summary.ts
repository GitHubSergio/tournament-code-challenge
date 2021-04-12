export interface OutPut {
  print(report: string): void;
}

export interface MultipleOf {
  isMultipleOf(number: number, multipleOf: number): boolean;
}

export class Summary {
  constructor(public number: MultipleOf, public outPut: OutPut) {}

  loopThroughNumber(min: number, max: number): void {
    const {isMultipleOf} = this.number
    const {print} = this.outPut

    for (let num = min; num <= max; num++) {
      isMultipleOf(num, 3) && isMultipleOf(num, 5)
        ? print(`FizzBuzz ${num}`)
        : (isMultipleOf(num, 3)
        ? print(`Fizz ${num}`)
        : (isMultipleOf(num, 5)
          ? print(`Buzz ${num}`)
          : print(`${num}`)))
    }
  }

}
