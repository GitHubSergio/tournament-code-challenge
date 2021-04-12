"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConsoleReport_1 = require("../src/ConsoleReport");
const mocha_1 = require("mocha");
const chai_1 = require("chai");
const ts_mockito_1 = require("ts-mockito");
mocha_1.describe('ConsoleReport', () => {
    it('should print the report', () => {
        const report = new ConsoleReport_1.ConsoleReport();
        const spiedReport = ts_mockito_1.spy(report);
        report.print('test print');
        chai_1.expect(ts_mockito_1.capture(spiedReport.print).first()[0]).to.equal("test print");
    });
});
