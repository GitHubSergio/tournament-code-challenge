import {Inject, Container, Scope} from 'typescript-ioc'
import {Summary} from "./Summary";
import {CheckNumbers} from "./CheckNumbers";
import {ConsoleReport} from "./ConsoleReport";

let summary = Container.get(Summary);
summary.loopThroughNumber(1, 100)

// or the above can be chained
// Container.get(Summary).loopThroughNumber(1, 100);

