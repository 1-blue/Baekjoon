/**
 * 숫자 역순으로 만들고 크기비교
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const array = line.trim().split(" ");

  const number = [];

  number.push(Number(array[0].split("").reverse().join("")));
  number.push(Number(array[1].split("").reverse().join("")));

  console.log(number[0] > number[1] ? number[0] : number[1]);

  rl.close();
}).on("close", function () {
  process.exit();
});