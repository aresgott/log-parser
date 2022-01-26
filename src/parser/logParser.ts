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
    return this.lexicalParser.parser(input);
  }

  parse(reader: IReader, writer: IWriter): void {
    const allLogs: Array<OutputLog> = [];
    const input = reader.reader();

    input.forEach((item) => {
      const log: OutputLog = this.singleLog(item);
      if (Object.keys(log).length > 0) allLogs.push(log);
    });

    this.logWriter(writer, allLogs);
  }

  logWriter(writer: IWriter, logs: Array<OutputLog>): void {
    writer.writer(logs);
  }
}
