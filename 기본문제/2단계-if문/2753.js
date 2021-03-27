/**
 * 윤년이면 1출력 아니면 0출력
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const year = Number(line);

  // 4의 배수이고
  const x = ((year % 4) === 0);

  // 100의 배수가 아니거나
  const y = !((year % 100) === 0);

  // 400의 배수이고
  const z = ((year % 400) === 0);

  if(x && (y || z)){
    console.log("1");
  } else {
    console.log("0");
  }
  
  rl.close();
}).on("close", function () {
  process.exit();
});