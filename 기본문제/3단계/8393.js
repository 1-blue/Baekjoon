/**
 * N까지합구하기
 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const number = Number(line);

  let sum = 0;

  for(let i = 1; i<=number; i++){
    sum += i;
  }

  console.log(sum);

  rl.close();
}).on("close", function () {
  process.exit();
});