"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_ioc_1 = require("typescript-ioc");
const Summary_1 = require("./Summary");
let summary = typescript_ioc_1.Container.get(Summary_1.Summary);
summary.loopThroughNumber(1, 100);
// or the above can be chained
// Container.get(Summary).loopThroughNumber(1, 100);
