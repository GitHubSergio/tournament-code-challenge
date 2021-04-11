"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Summary_1 = require("./Summary");
var CheckNumbers_1 = require("./CheckNumbers");
var ConsoleReport_1 = require("./ConsoleReport");
var summary = new Summary_1.Summary(new CheckNumbers_1.CheckNumbers(), new ConsoleReport_1.ConsoleReport());
summary.loopThroughNumber();
