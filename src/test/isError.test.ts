import { LexicalParser } from "../lexical/lexicalParser";

test("Test for checking parser to find error level", () => {
  const isError = new LexicalParser().parse(
    '2021-08-09T02:12:51.259Z - error - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Cannot find user orders list","code": 404,"err":"Not found"}'
  );
  const result = {
    timestamp: "2021-08-09T02:12:51.259Z",
    loglevel: "error",
    transactionId: "9abc55b2-807b-4361-9dbe-aa88b1b2e978",
    err: "Not found",
  };
  expect(isError).toEqual(result);
});
