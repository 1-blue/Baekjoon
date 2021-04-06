/**
 * 그룹 단어 체커
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
  const [repeat, ...array] = input;
  const alphabet = Array(26).fill().map(() => 0);
  let previousAlphabet = "";
  let errorCount = 0;
  let count = 0;

  array.forEach(v => {
    v.split("").forEach(v => {
      const index = v.charCodeAt() - 97;

      if(alphabet[index] >= 1){       // 중복된알파벳인데
        if(previousAlphabet !== v){   // 이전에나온알파벳과 다르면
          errorCount++;               // 에러표시하고
          return;                     // forEach탈출
        }
      } else {
        alphabet[index]++;            // 그게아니면 해당알파벳 하나증가
      }

      previousAlphabet = v;
    })

    if(errorCount === 0){
      count++;
    }

    // 초기화
    errorCount = 0;
    previousAlphabet = "";
    alphabet.forEach((v, i) => alphabet[i] = 0);
  })

  console.log(count);


  rl.close();
  process.exit();
});