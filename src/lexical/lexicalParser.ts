import { OutputLog } from "../interfaces/outputLog.interface";
import LogLevel from "../types/logLevel";

export class LexicalParser {
  parser(log: string): OutputLog {
    try {
      const logSplit = log.split(" - ");
      const [timeOccure, logLevel, logDetail] = logSplit;

      if (logSplit.length === 3) {
        try {
          if (this.checkLogLevel(logLevel)) {
            const logOutput: OutputLog = {
              timestamp: timeOccure,
              loglevel: logLevel,
              transactionId: JSON.parse(logDetail).transactionId,
              err: JSON.parse(logDetail).err,
            };
            return logOutput;
          } else {
            return {};
          }
        } catch (error) {
          throw new Error("can't parse data.");
        }
      } else {
        throw new Error(
          'your log structure is not correct : <ISO Date> - <Log Level> - {"transactionId: "<UUID>", "details": "<message event/action description>", "err": "<Optionall, error description>", ...<additional log information>"'
        );
      }
    } catch (error) {
      console.log(error); //we can log it to file for errors
    }
  }

  checkLogLevel(logLevel: string) {
    if (logLevel == LogLevel.LEVEL_ERROR) {
      return true;
    } else {
      return false;
    }
  }
}
