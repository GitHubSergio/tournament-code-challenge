"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Summary_1 = require("../src/Summary");
const CheckNumbers_1 = require("../src/CheckNumbers");
const ConsoleReport_1 = require("../src/ConsoleReport");
const mocha_1 = require("mocha");
const chai_1 = require("chai");
const ts_mockito_1 = require("ts-mockito");
mocha_1.describe('Summary', () => {
    it('should print Fizz for 3, Buzz for 5 and FizzBuzz for 15', () => {
        const checkNumbers = new CheckNumbers_1.CheckNumbers();
        const outPut = new ConsoleReport_1.ConsoleReport();
        const summary = new Summary_1.Summary(checkNumbers, outPut);
        const spiedReport = ts_mockito_1.spy(outPut);
        const output = summary.loopThroughNumber(1, 15);
        chai_1.expect(ts_mockito_1.capture(spiedReport.print).third()[0]).to.equal("Fizz");
        chai_1.expect(ts_mockito_1.capture(spiedReport.print).byCallIndex(4)[0]).to.equal("Buzz");
        chai_1.expect(ts_mockito_1.capture(spiedReport.print).last()[0]).to.equal("FizzBuzz");
    });
    it('should call isMultipleOf and outPut', () => {
        const checkNumbers = ts_mockito_1.mock(CheckNumbers_1.CheckNumbers);
        const outPut = ts_mockito_1.mock(ConsoleReport_1.ConsoleReport);
        let summary;
        const spiedReport = ts_mockito_1.spy(outPut);
        summary = new Summary_1.Summary(ts_mockito_1.instance(checkNumbers), ts_mockito_1.instance(outPut));
        summary.loopThroughNumber(3, 5);
        ts_mockito_1.verify(checkNumbers.isMultipleOf(3, 5)).once();
        ts_mockito_1.verify(outPut.print(ts_mockito_1.anyString())).thrice();
    });
});
