const readline = require('readline');

/* eslint-disable comma-dangle */
const readInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
/* eslint-enable comma-dangle */

const printLine = (data) => {
  console.log(`Your name is: ${data}`);
};

const close = () => {
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
};

/* eslint-disable comma-dangle */
readInterface.question('Welcome to Holberton School, what is your name?\n', (answer) => {
  printLine(answer);
  readInterface.close();
});

readInterface.on('close', close);
