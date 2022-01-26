import { IReader } from "../../interfaces/reader.interface";
import { readFileSync } from "fs";

export class InputFile implements IReader {
  reader(inputAddress: string): Array<string> {
    return readFileSync(inputAddress).toString().split("\n");
  }
}