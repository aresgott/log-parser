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

  checkLogLevel(logLevel: string):boolean {
    let logLvl: string;
    switch (process.env.LOG_LEVEL) {
      case "error":
        logLvl = LogLevel.LEVEL_ERROR;
        break;
      case "info":
        logLvl = LogLevel.LEVEL_INFO;
        break;
      case "warng":
        logLvl = LogLevel.LEVEL_WARN;
        break;
      case "debug":
        logLvl = LogLevel.LEVEL_DEBUG;
        break;
      default:
        logLvl = LogLevel.LEVEL_ERROR;
        break;
    }
    if (logLevel == logLvl) {
      return true;
    } else {
      return false;
    }
  }
}
