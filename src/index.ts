import {Container} from 'typescript-ioc'
import {Summary} from "./Summary";

let summary = Container.get(Summary);
summary.loopThroughNumber(1, 100)

// or the above can be chained
// Container.get(Summary).loopThroughNumber(1, 100);

