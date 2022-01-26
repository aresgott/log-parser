import { ILexicalParser } from "../interfaces/lexicalParser.interface";
import { ILogParser } from "../interfaces/logParser.interface";
import { OutputLog } from "../interfaces/outputLog.interface";
import { IReader } from "../interfaces/reader.interface";
import { IWriter } from "../interfaces/writer.interface";
import { LexicalParser } from "../lexical/lexicalParser";

export class LogParser implements ILogParser {
  constructor(lexicalParser: ILexicalParser) {
    this.lexicalParser = lexicalParser;
  }
  lexicalParser: LexicalParser;

  singleLog(input: string): OutputLog {
    return this.lexicalParser.parse(input);
  }

  parse(reader: IReader, writer: IWriter): void {
    const input = reader.reader();

    const allLogs = this.batchLog(input);

    this.logWriter(writer, allLogs);
  }

  batchLog(input: Array<string>): Array<OutputLog> {
    const allLogs: Array<OutputLog> = [];
    input.forEach((item) => {
      const log: OutputLog = this.singleLog(item);
      if (Object.keys(log).length > 0) allLogs.push(log);
    });
    return allLogs;
  }
  logWriter(writer: IWriter, logs: Array<OutputLog>): void {
    writer.writer(logs);
  }
}
