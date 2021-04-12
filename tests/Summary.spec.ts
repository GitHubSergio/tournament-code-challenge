import {Summary} from '../src/Summary'
import { CheckNumbers } from '../src/CheckNumbers'
import { ConsoleReport } from '../src/ConsoleReport'
import {describe} from 'mocha';
import {expect} from 'chai';
import {anyString, capture, instance, mock, spy, verify} from 'ts-mockito'

describe('Summary', () => {
  it('should print Fizz for 3, Buzz for 5 and FizzBuzz for 15', () => {
    const checkNumbers: CheckNumbers = new CheckNumbers();
    const outPut: ConsoleReport = new ConsoleReport();
    const summary: Summary = new Summary(checkNumbers, outPut)
    const spiedReport = spy(outPut);
    const output = summary.loopThroughNumber(1, 15)

    expect(capture(spiedReport.print).third()[0]).to.equal("Fizz")
    expect(capture(spiedReport.print).byCallIndex(4)[0]).to.equal("Buzz")
    expect(capture(spiedReport.print).last()[0]).to.equal("FizzBuzz")
  });

  it('should call isMultipleOf and outPut', () => {
    const checkNumbers: CheckNumbers = mock(CheckNumbers);
    const outPut: ConsoleReport = mock(ConsoleReport);
    let summary: Summary;
    const spiedReport = spy(outPut);
    summary = new Summary(instance(checkNumbers), instance(outPut));
    summary.loopThroughNumber(3, 5)
    verify(checkNumbers.isMultipleOf(3, 5)).once()
    verify(outPut.print(anyString())).thrice()
  });
})

