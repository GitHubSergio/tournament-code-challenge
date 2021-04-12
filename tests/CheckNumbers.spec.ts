import {CheckNumbers} from '../src/CheckNumbers'
import {describe} from 'mocha';
import {expect} from 'chai';

describe('CheckNumbers', () => {
  it('should return true if the number is a multiple of 3', () => {
    const mockedFoo: CheckNumbers = new CheckNumbers()
    expect(mockedFoo.isMultipleOf(15, 3)).equal(true)
  });

  it('should return true if the number is a multiple of 5', () => {
    const mockedFoo: CheckNumbers = new CheckNumbers()
    expect(mockedFoo.isMultipleOf(15, 5)).equal(true)
  });

  it('should return false if the number is not a multiple of 3', () => {
    const mockedFoo: CheckNumbers = new CheckNumbers()
    expect(mockedFoo.isMultipleOf(16, 3)).equal(false)
  });

  it('should return false if the number is not a multiple of 5', () => {
    const mockedFoo: CheckNumbers = new CheckNumbers()
    expect(mockedFoo.isMultipleOf(16, 5)).equal(false)
  });
})
