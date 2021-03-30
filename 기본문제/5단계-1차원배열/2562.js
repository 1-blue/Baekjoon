/**
 * 최대값과 인덱스구하기
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
  let maxNumber = -1;

  if(input.length !== 9){
    return;
  }

  for(let item of input){
    if(item >= 100){
      return;
    }
  }

  const isOverlap = input.some((value, index, array) => {
    let result = array.includes(value, index + 1);
    return result
  })

  if(isOverlap){
    return;
  }

  for(let item of input){
    maxNumber = (maxNumber < Number(item)) ? item : maxNumber;
  }

  console.log(maxNumber);
  console.log(input.indexOf(maxNumber) + 1);

  rl.close();
  process.exit();
});