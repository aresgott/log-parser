import { IReader } from "../../interfaces/reader.interface";
import { readFileSync } from "fs";

export class InputFile implements IReader {
  inputFile: string;
  constructor(inputFile: string) {
    this.inputFile = inputFile;
  }
  reader(): Array<string> {
    return readFileSync(this.inputFile).toString().split("\n");
  }
}