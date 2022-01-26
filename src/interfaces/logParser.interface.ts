import { OutputLog } from "./outputLog.interface";
import { IReader } from "./reader.interface";
import { IWriter } from "./writer.interface";

export interface ILogParser {
  singleLog(lineLog: string, level: string): OutputLog;
  parse(reader: IReader, writer: IWriter): void;
  logWriter(writer: IWriter, logs: Array<OutputLog>): void;
  batchLog(input: Array<string>): Array<OutputLog>;
}
