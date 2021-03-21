/**
 * 3자리수를 2개 입력받을 때
 * 곱셈의 각 결과물을 출력
 */

const readline = require('readline');
    
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function(line) {
  input.push(line);

}).on("close", function() {
	const x = Number(input[0]);
  const y = Number(input[1]);
	
	const value1 = Math.floor(y % 10);
	const value2 = Math.floor((y % 100 - value1) / 10);
	const value3 = Math.floor(y % 1000 / 100);

  console.log(x * value1);
  console.log(x * value2);
  console.log(x * value3);
  console.log(x * y);

  process.exit();
});