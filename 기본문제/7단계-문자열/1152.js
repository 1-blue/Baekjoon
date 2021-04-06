/**
 * 단어개수
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const array = line.trim().split(" ");
  let count = 0;

  array.forEach(v => {
    if(v.length !== 0){
      count++;
    }
  });
  
  console.log(count);

  rl.close();
}).on("close", function () {
  process.exit();
});