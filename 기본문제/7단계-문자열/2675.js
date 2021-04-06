/**
 * 문자열 반복
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', function (line) {
  input.push(line);

}).on("close", function () {
  const [repeat, ...array] = input;
  let result = "";

  if(Number(repeat) !== array.length){
    return;
  }

  array.forEach(v => {
    const index = Number(v.split(" ")[0]);
    const string = v.split(" ")[1];
    string.split("").forEach(v => {
      for (let i = 0; i < index; i++) {
        result += v;
      }
    })
    result += '\n';
  });

  console.log(result);

  rl.close();
  process.exit();
});