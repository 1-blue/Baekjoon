/**
 * 입력받은만큼
 * A + B
 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on("close", function () {
  const index = input[0];
  let numbers = [];

  for (let i = 1; i < input.length; i++) {
    numbers.push(input[i].split(' '));
  }

  for(let i = 0; i<index; i++){
    console.log(Number(numbers[i][0]) + Number(numbers[i][1]));
  }

  rl.close();
  process.exit();
});