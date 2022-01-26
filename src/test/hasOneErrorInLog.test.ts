import { LexicalParser } from "../lexical/lexicalParser";
import { LogParser } from "../parser/logParser";

test("We have 1 error in this array and must be true", () => {
  const lex = new LexicalParser();
  const parser = new LogParser(lex);
  const hasError = parser.batchLog([
    '2021-08-09T02:12:51.259Z - info - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Cannot find user orders list","code": 404,"err":"Not found"}',
    '2021-08-09T02:12:51.259Z - error - {"transactionId":"1acc35b2-807b-4361-9dbe-aa88b1b2e978","details":"Second error","code": 404,"err":"Not found"}'
  ]);
  expect(hasError.length).toEqual(1);
});
