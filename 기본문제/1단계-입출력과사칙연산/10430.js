const readline = require('readline');
    
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  input = line.split(' ');
    
  const x = Number(input[0]);
  const y = Number(input[1]);
  const z = Number(input[2]);

  console.log((x + y) % z);
  console.log(((x % z) + (y % z)) % z);
  console.log((x * y) % z);
  console.log(((x % z) * (y % z)) % z);
  
  rl.close();
}).on("close", function() {
  process.exit();
});