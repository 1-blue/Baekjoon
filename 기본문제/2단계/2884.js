/**
 * 알람맞추기
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  input = line.split(' ');

  let hour = Number(input[0]);
  let minute = Number(input[1]);

  if(minute < 45){
    if(hour < 1){
      hour = 24 - 1;
    } else {
      hour -= 1;
    }
    minute += 15;
  } else {
    minute -= 45;
  }

  console.log(hour, minute);

  rl.close();
}).on("close", function () {
  process.exit();
});