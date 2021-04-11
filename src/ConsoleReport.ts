import {OutPut} from "./Summary";

export class ConsoleReport implements OutPut {
  print(report: string): void {
    console.log(report)
  }
}
