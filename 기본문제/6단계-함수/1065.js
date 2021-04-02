/**
 * 한수구하기
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const condition = Number(line);
  let count = 0;
  
  if (condition >= 100) {
    count = 99;
  } else {
    count = condition;
  }
  
  for (let i = 100; i <= condition; i++) {
    const tempArray = i.toString().split("").map((v) => Number(v));
  
    if (tempArray[0] - tempArray[1] === tempArray[1] - tempArray[2]) {
      count++;
    }
  }
  
  console.log(count);

  rl.close();
}).on("close", function () {
  process.exit();
});