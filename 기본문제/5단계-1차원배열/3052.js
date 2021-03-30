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
  const array = [];

  for(let item of input){
    array.push(Number(item) % 42);
  }

  // 중복값제거
  const uniqueArray = array.filter((element, index) => array.indexOf(element) === index);

  console.log(uniqueArray.length);

  rl.close();
  process.exit();
});