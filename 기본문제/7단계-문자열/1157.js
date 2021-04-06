/**
 * 단어공부
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.on('line', function (line) {
  const array = Array(26).fill().map(() => 0);
  const string = line.split("");

  string.forEach(v => {
    const index = v.toLowerCase().charCodeAt() - 97;
    array[index]++;
  });

  let max = -1;
  let maxIndex = -1;
  let count = 0;

  array.forEach((v, i) => {
    if(max < v){
      max = v;
      maxIndex = i;
    }
  });

  array.forEach(v => {
    if(max === v){
      count++;
    }
  });

  if(count !== 1){
    console.log("?");
  } else {
    console.log(String.fromCharCode(maxIndex + 65));
  }

  rl.close();
}).on("close", function () {
  process.exit();
});