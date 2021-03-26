/**
 * N까지출력
 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const number = Number(line);
  let result = "";

  for(let i = 1; i<=number; i++){
    result += `${i}\n`
  }

  console.log(result);

  rl.close();
}).on("close", function () {
  process.exit();
});