import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your name: ", (line) => {
  console.log(line + 1000);
  rl.close();
});
