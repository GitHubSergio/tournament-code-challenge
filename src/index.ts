import {Summary} from "./Summary";
import {CheckNumbers} from "./CheckNumbers";
import {ConsoleReport} from "./ConsoleReport";

const summary: Summary = new Summary(new CheckNumbers(), new ConsoleReport())
summary.loopThroughNumber(1, 100)
