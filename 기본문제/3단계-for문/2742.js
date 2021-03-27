/**
 * N까지 역순출력
 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const number = Number(line);
  let result = "";

  for (let i = number; i > 0; i--) {
    result += `${i}\n`
  }

  console.log(result);

  rl.close();
}).on("close", function () {
  process.exit();
});