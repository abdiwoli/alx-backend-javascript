/* eslint-disable comma-dangle */
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Flag to check if the input is piped
const isPipedInput = !process.stdin.isTTY;

readline.question('', (name) => {
  process.stdout.write(`Your name is: ${name.trim()}\r`);

  if (isPipedInput) {
    setTimeout(() => {
      process.stdout.write('This important software is now closing\r');
      process.exit(0);
    }, 100);
  } else {
    readline.close();
  }
});


process.stdin.on('end', () => {
  if (isPipedInput) {
    process.stdout.write('This important software is now closing\n');
    process.exit(0);
  }
});
