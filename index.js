const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your age: ', (age) => {
  console.log(`My age is: , ${age}!`);
  rl.close();
});
