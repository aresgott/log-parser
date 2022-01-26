import { OutputLog } from "./outputLog.interface";

export interface ILogParser {
  logReader(lineLog: string, level: string): OutputLog;
  batchLog(logs: Array<string>): Array<OutputLog>;
}
