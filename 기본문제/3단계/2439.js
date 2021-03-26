/**
 * 띄우고 별찍기
 */
 const readline = require('readline');

 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });
 
 rl.on('line', function (line) {
   const number = Number(line);
   let result = "";
   let temp = "";
 
   for (let i = 0; i < number; i++) {
     for (let j = 0; j < number; j++) {
      temp += i < j ? " " : "*";
     }
     result += temp.split("").reverse().join("");
     result += '\n';
     temp = "";
   }
 
   console.log(result);
 
   rl.close();
 }).on("close", function () {
   process.exit();
 });