import { OutputLog } from "./outputLog.interface";

export interface ILexicalParser {
  parser(input: string): OutputLog;
  checkLogLevel(logLevel: string): boolean;
}
