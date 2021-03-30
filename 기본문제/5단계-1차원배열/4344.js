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
  const studentScore = [];
  let result = "";

  // 계산할것만 분리
  for (let index in input) {
    if ("0" === index) {
      continue;
    }
    studentScore.push(input[index]);
  }

  // 입력받은줄의 개수 비교
  if (studentScore.length !== number) {
    return;
  }

  // 각 줄마다 실행
  studentScore.forEach((score) => {
    const [studentLength, ...scores] = score.split(" ");

    // 입력한학생수와 입력받은학생의점수가 다르면
    if(Number(studentLength) !== scores.length){
      return;
    }

    // 이 줄의 평균구하기
    const avg = scores.reduce((p, v) => p + Number(v), 0) / scores.length;

    // 평균보다 높은애들 개수
    let count = 0;
    scores.forEach(v => Number(v) > avg ? count++ : 0);

    // 비율구하기
    result += (count / studentLength * 100).toFixed(3) + '%\n';
  })

  console.log(result);

  rl.close();
  process.exit();
});