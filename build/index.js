"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Summary_1 = require("./Summary");
const CheckNumbers_1 = require("./CheckNumbers");
const ConsoleReport_1 = require("./ConsoleReport");
/*const summary = new Summary(new CheckNumbers(), new ConsoleReport())
summary.loopThroughNumber(1, 100)*/
const summary = new Summary_1.Summary(new CheckNumbers_1.CheckNumbers(), new ConsoleReport_1.ConsoleReport());
summary.loopThroughNumber(1, 100);
