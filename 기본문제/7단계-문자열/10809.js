/**
 * 알파벳위치찾기
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const array = Array(26).fill().map( () => -1);
  const string = line;

  const temp = string.split("");

  temp.forEach((v, i) => {
    const index = v.charCodeAt() - 97;
    array[index] = (array[index] === -1 ? i : array[index]);
  });

  let result = "";

  array.forEach((v, i) => {
    result += array[i] + " ";
  })

  console.log(result);

  rl.close();
}).on("close", function () {
  process.exit();
});