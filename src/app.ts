import { Argument } from "./arguments/argument-cli";

const args = new Argument().args(process.argv);
console.log(args)