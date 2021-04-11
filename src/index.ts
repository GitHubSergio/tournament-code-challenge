import {Summary} from "./Summary";
import {CheckNumbers} from "./CheckNumbers";
import {ConsoleReport} from "./ConsoleReport";

const summary = new Summary(new CheckNumbers(), new ConsoleReport())
summary.loopThroughNumber()
