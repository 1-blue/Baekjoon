/**
 * 각자리숫자개수구하기
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
  const array = Array(10).fill().map(() => 0);  // 길이가 10이고 값이 0인 배열
  let multiplyNumber = 1;

  for (let i of input) {
    multiplyNumber *= Number(i);
  }

  // 숫자 쪼개서 각 자리수로 배열만들기
  let tempArray = multiplyNumber.toString().split("");

  // 자리수에 해당하는 값 1증가
  for(let index of tempArray){
    array[Number(index)]++;
  }
  
  let result = "";

  for(let index of array){
    result += index + '\n';
  }

  console.log(result);

  rl.close();
  process.exit();
});