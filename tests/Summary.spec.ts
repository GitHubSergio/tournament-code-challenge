import {Summary} from '../src/Summary'
import { CheckNumbers } from '../src/CheckNumbers'
import { ConsoleReport } from '../src/ConsoleReport'
import {describe} from 'mocha';
import {expect} from 'chai';
import {
  mock,
  spy,
  capture
} from 'ts-mockito'

describe('Summary', () => {
  it('should return true if the number is a multiple of 3', () => {
    const report: ConsoleReport = new ConsoleReport();
    const checkNumbers: CheckNumbers = new CheckNumbers();
    const mockedFoo: Summary = new Summary(checkNumbers, report)
    const spiedReport = spy(report);
    const output = mockedFoo.loopThroughNumber(1, 15)
    expect(capture(spiedReport.print).third()[0]).to.equal("Fizz 3")
    expect(capture(spiedReport.print).byCallIndex(4)[0]).to.equal("Buzz 5")
    expect(capture(spiedReport.print).last()[0]).to.equal("FizzBuzz 15")
  });
})

