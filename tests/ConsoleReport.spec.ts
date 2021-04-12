import {ConsoleReport} from '../src/ConsoleReport'
import {describe} from 'mocha';
import {expect} from 'chai';
import {
  mock,
  instance,
  verify,
  when,
  spy,
  capture
} from 'ts-mockito'

describe('ConsoleReport', () => {
  it('should print the report', () => {
    const report: ConsoleReport = new ConsoleReport();
    const spiedReport = spy(report);
    report.print('test print');
    expect(capture(spiedReport.print).first()[0]).to.equal("test print")
  });
});
