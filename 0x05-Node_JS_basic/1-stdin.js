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
    // Wait for a short period to ensure the previous output is processed
    setTimeout(() => {
      process.stdout.write('This important software is now closing\n');
      process.exit(0);
    }, 100); // Adjust delay as needed (100 ms in this case)
  } else {
    readline.close(); // Close readline interface for interactive mode
  }
});

// Handle EOF
process.stdin.on('end', () => {
  if (isPipedInput) {
    process.stdout.write('This important software is now closing\n');
    process.exit(0);
  }
});
