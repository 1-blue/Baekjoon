/**
 * 입력받고 최대최소구하기
 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', function (line) {
  input.push(line.split(' '));

}).on("close", function () {
  const number = Number(input[0][0]);
  let arr = [];

  arr = input[1].sort((a, b) => a - b);

  console.log(arr[0], arr[arr.length - 1]);
  
  rl.close();
  process.exit();
});