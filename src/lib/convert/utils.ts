export const stringToArray = (input: string): string[] =>
  input.replace(/\r/g, "").split("\n");
