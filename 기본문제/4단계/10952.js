/**
 * 정수입력받고 A + B
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
  let i = 0;
  let result = "";

  while(input[i][0] !== '0' && input[i][1] !== '0'){
    result += Number(input[i][0]) + Number(input[i][1]) + '\n';
    i++;
  }

  console.log(result);

  rl.close();
  process.exit();
});