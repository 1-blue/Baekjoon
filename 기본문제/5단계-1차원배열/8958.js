/**
 * 이상한 점수구하기
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
  const number = Number(input[0]);
  const scores = [];

  // 계산할것만 분리
  for(let index in input){
    if("0" === index){
      continue;
    }
    scores.push(input[index]);
  }

  if (scores.length !== number) {
    return;
  }

  let currentScore = 0;
  let result = "";

  for(let item of scores){
    result += item.split("").reduce((p, c) => {
      if(c === "O"){
        currentScore++;
      } else {
        currentScore = 0;
      }
      return p + currentScore;
    }, 0);
    result += '\n';
    currentScore = 0;
  }

  console.log(result);

  rl.close();
  process.exit();
});