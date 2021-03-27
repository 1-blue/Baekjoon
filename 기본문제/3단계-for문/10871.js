/**
 * x보다 작은수
 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', function (line) {
  input.push(line.split(" "));

}).on("close", function () {
  // input[0]에는 첫줄
  // input[1]에는 두번째줄
  
  const inputDigitLength = Number(input[0][0]);
  const number = Number(input[0][1]);
  let result = "";

  if(input[1].length !== inputDigitLength){
    return;
  }

  for(let i = 0; i<inputDigitLength; i++){
    result += Number(input[1][i]) < number ? `${input[1][i]} ` : "";
  }
  
  console.log(result);

  rl.close();
  process.exit();
});