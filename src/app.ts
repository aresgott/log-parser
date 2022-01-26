import { Argument } from "./arguments/argument-cli";
import { InputFile } from "./io/reader/inputFile";
import { WriterFile } from "./io/writer/writeFile";
import { LexicalParser } from "./lexical/lexicalParser";
import { LogParser } from "./parser/logParser";
import * as dotenv from "dotenv";
dotenv.config();



const args = new Argument().args(process.argv);

const lexicalParser = new LexicalParser();
const logParser = new LogParser(lexicalParser);

const allTypeOfReader = [new InputFile()]; //you can add many input type

allTypeOfReader.forEach((Reader) => {
  const readerInput = Reader.reader(args.input);
  const fileBatchOutput = logParser.batchLog(readerInput);
  new WriterFile().writer(args.output, fileBatchOutput);
});
