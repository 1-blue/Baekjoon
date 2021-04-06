/**
 * 숫자의 합
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on("close", function () {
  const [condition, temp] = input;

  const numbers = temp.split("");

  if(Number(condition) !== numbers.length){
    return;
  }

  const result = numbers.reduce((p, v) => p + Number(v), 0);

  console.log(result);

  rl.close();
  process.exit();
});