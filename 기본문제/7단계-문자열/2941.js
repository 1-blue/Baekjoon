/**
 * 크로아티아 알파벳
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const croatia_alphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
  let string = line;
  let count = 0;

  croatia_alphabet.forEach(v => {   // "ddz=z="일때 "dz="없애고 "dz="이남음... 그래서 중간에 공백추가
    while(string.includes(v)){
      count++;                            // 크로아티아 알파벳일경우 ++
      string = string.replace(v, " ");    // 중간에 공백추가
    }
  })

  string = string.split("");

  string.forEach(v => {   //공백제외하고
    if(v === " "){
      count--;
    }
  })

  count += string.length;   //남은문자길이 더해줌

  console.log(count);

  rl.close();
}).on("close", function () {
  process.exit();
});