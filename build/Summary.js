"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const typescript_ioc_1 = require("typescript-ioc");
const CheckNumbers_1 = require("./CheckNumbers");
const ConsoleReport_1 = require("./ConsoleReport");
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
let Summary = class Summary {
    constructor(checkNumbers, outPut) {
        this.checkNumbers = checkNumbers;
        this.outPut = outPut;
    }
    loopThroughNumber(min, max) {
        const { isMultipleOf } = this.checkNumbers;
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
};
Summary = __decorate([
    __param(0, typescript_ioc_1.Inject), __param(1, typescript_ioc_1.Inject),
    __metadata("design:paramtypes", [CheckNumbers_1.CheckNumbers, ConsoleReport_1.ConsoleReport])
], Summary);
exports.Summary = Summary;
