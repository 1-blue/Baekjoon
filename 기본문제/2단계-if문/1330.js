/**
 * if로 대소비교
 */

const readline = require('readline');
    
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  input = line.split(' ');
    
  const x = Number(input[0]);
  const y = Number(input[1]);

  if(x > y){
    console.log(">");
  } else if (x === y) {
    console.log("==");
  } else {
    console.log("<");
  }

  rl.close();
}).on("close", function() {
  process.exit();
});