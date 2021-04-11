"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckNumbers = void 0;
var CheckNumbers = /** @class */ (function () {
    function CheckNumbers() {
    }
    CheckNumbers.prototype.isMultipleOf = function (number, multipleOf) {
        return number % multipleOf === 0;
    };
    return CheckNumbers;
}());
exports.CheckNumbers = CheckNumbers;
