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

const reader = new InputFile(args.input);
const writer = new WriterFile(args.output);
logParser.parse(reader, writer);
