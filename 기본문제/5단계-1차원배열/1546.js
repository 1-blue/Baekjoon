/**
 * 이상한 평균구하기
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
  const scores = input[1].split(" ");
  let highScore = 0;

  if(scores.length !== number){
    return;
  }

  // 최고점수
  for(let score of scores){
    highScore = Number(score) > highScore ? Number(score) : highScore;
  }

  // 새로운 점수
  const newScores = scores.map((value, index) => Number(value) / highScore * 100);

  // 새로운 점수의 평균
  const newScoresAvg = newScores.reduce((p, v) => v + p, 0) / scores.length;

  console.log(newScoresAvg);

  rl.close();
  process.exit();
});