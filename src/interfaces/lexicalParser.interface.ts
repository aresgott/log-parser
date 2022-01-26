import { OutputLog } from "./outputLog.interface";

export interface ILexicalParser {
  parse(input: string): OutputLog;
  checkLogLevel(logLevel: string): boolean;
}
