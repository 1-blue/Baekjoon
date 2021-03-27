/**
 * 
 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const number = Number(line);
  let temp = -1;    // 임시결과
  let x = -1;       // 십의자리수
  let y = -1;       // 일의자리수
  let z = -1;       // 십의자리수 + 일의자리수
  let count = 0;    // 반복횟수

  while(temp !== number){
    if (count === 0) {
      temp = number;
    }

    if (temp < 10) {
      z = 0 + temp;
      temp = temp * 10 + z;
    } else {
      x = Math.floor(temp / 10);
      y = temp % 10;
      z = x + y;
      temp = y * 10 + Math.floor(z % 10);
    }

    count++;
  }

  console.log(count);

  rl.close();
}).on("close", function () {

  process.exit();
});