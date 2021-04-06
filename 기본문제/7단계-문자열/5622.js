/**
 * 다이얼
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const array = line.split("");

  const value = array.reduce((p, v) => {
    const ascii = v.charCodeAt();
    let number = 65;

    if(ascii >= 83){    // S일경우
      number++;
    }
    if(ascii >= 90){    // Z일경우
      number++;
    }

    let index = Math.floor((ascii - number) / 3) + 2    // 2부터 시작하니까 +2
    return p + index + 1;   // 다이얼되돌리는경우 +1초
  }, 0)

  console.log(value);

  rl.close();
}).on("close", function () {
  process.exit();
});