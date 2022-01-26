export class Argument {
  args(argumentParams: Array<string>) {
    try {
      const input = argumentParams.findIndex((item) => {
        return item == "--input";
      });
      const output = argumentParams.findIndex((item) => {
        return item == "--output";
      });
      if (!input || !output || input == -1 || output == -1) {
        throw new Error(
          "Arguments needed. please set input and output file address"
        );
      }
      return {
        input: argumentParams[input + 1],
        output: argumentParams[output + 1],
      };
    } catch (error) {
      console.log("problem on arguments");
    }
  }
}
