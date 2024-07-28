const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

readline.question('', (name) => {
  process.stdout.write(`Your name is: ${name.trim()}\r`);
  readline.close();
});

readline.on('close', () => {
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
});
