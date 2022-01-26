import { LexicalParser } from "../lexical/lexicalParser";

test("Test for checking parser to send back nothing because this log is debug", () => {
  const isError = new LexicalParser().parse(
    '2021-08-09T02:12:51.258Z - debug - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e821","details":"About to request user orders list","userId":16}'
  );
  expect(isError).toEqual({})
});
