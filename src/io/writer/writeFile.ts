import { writeFile } from "fs";
import { IWriter } from "../../interfaces/writer.interface";

export class WriterFile implements IWriter {
  writer(outputFileName: string, outputLog: Array<object>) {
    writeFile(outputFileName, JSON.stringify(outputLog), function (err) {
      const yellowColor = "\x1b[33m%s\x1b[0m";
      if (err) return console.log(yellowColor, err);
      console.log(yellowColor, "Write File Done.");
    });
  }
}
