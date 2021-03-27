/**
 * 사분면 판단
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  if(line !== 0){
    input.push(line);
  } else {
    return;
  }

}).on("close", function () {
  const x = Number(input[0]);
  const y = Number(input[1]);

  if(x > 0 && y > 0){
    console.log("1");
  } else if(x > 0 && y < 0){
    console.log("4");
  } else if(x < 0 && y > 0){
    console.log("2");
  } else if(x < 0 && y < 0){
    console.log("3");
  }

  process.exit();
});