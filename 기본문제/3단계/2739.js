/**
 * N단출력
 */
 const readline = require('readline');
    
 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });
 
 rl.on('line', function(line) { 
   const number = Number(line);

   if(number < 1 || number > 9){
     return;
   }
 
   for(let i = 1; i<10; i++){
     console.log(`${number} * ${i} = ${number * i}`);
   }
 
   rl.close();
 }).on("close", function() {
   process.exit();
 });