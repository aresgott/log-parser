import { ILexicalParser } from "../interfaces/lexicalParser.interface";
import { ILogParser } from "../interfaces/logParser.interface";
import { OutputLog } from "../interfaces/outputLog.interface";
import { LexicalParser } from "../lexical/lexicalParser";

export class LogParser implements ILogParser {
  constructor(lexicalParser: ILexicalParser) {
    this.lexicalParser = lexicalParser;
  }
  lexicalParser: LexicalParser;

  logReader(input: string): OutputLog {
    return this.lexicalParser.parser(input);
  }

  batchLog(input: Array<string>): Array<OutputLog> {
    const allLogs: Array<OutputLog> = [];
    input.forEach((item) => {
      const log: OutputLog = this.logReader(item);
      if (Object.keys(log).length > 0) allLogs.push(log);
    });
    return allLogs;
  }
}
