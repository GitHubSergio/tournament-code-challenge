"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CheckNumbers_1 = require("../src/CheckNumbers");
const mocha_1 = require("mocha");
const chai_1 = require("chai");
mocha_1.describe('CheckNumbers', () => {
    it('should return true if the number is a multiple of 3', () => {
        const mockedFoo = new CheckNumbers_1.CheckNumbers();
        chai_1.expect(mockedFoo.isMultipleOf(15, 3)).equal(true);
    });
    it('should return false if the number is not a multiple of 3', () => {
        const mockedFoo = new CheckNumbers_1.CheckNumbers();
        chai_1.expect(mockedFoo.isMultipleOf(16, 3)).equal(false);
    });
    it('should return true if the number is a multiple of 5', () => {
        const mockedFoo = new CheckNumbers_1.CheckNumbers();
        chai_1.expect(mockedFoo.isMultipleOf(15, 5)).equal(true);
    });
    it('should return false if the number is not a multiple of 5', () => {
        const mockedFoo = new CheckNumbers_1.CheckNumbers();
        chai_1.expect(mockedFoo.isMultipleOf(16, 5)).equal(false);
    });
});
