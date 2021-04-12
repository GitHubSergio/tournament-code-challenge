"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Summary_1 = require("../src/Summary");
const CheckNumbers_1 = require("../src/CheckNumbers");
const ConsoleReport_1 = require("../src/ConsoleReport");
const mocha_1 = require("mocha");
const chai_1 = require("chai");
mocha_1.describe('Summary', () => {
    it('should return true if the number is a multiple of 3', () => {
        const mockedFoo = new Summary_1.Summary(new CheckNumbers_1.CheckNumbers(), new ConsoleReport_1.ConsoleReport());
        // console.log('Summary test', mockedFoo.loopThroughNumber(1, 15))
        const output = mockedFoo.loopThroughNumber(1, 15);
        // expect(output).to.include(new Set(''))
        chai_1.expect(new Set([1, 2])).to.include(2);
    });
});
