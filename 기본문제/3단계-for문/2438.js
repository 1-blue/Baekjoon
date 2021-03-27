/**
 * 별찍기
 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const number = Number(line);
  let result = "";

  for (let i = 0; i < number; i++) {
    for (let j = 0; j <= i; j++) {
      result += "*";
    }
    result += '\n';
  }

  console.log(result);

  rl.close();
}).on("close", function () {
  process.exit();
});