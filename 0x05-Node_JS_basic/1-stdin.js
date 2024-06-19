const userInputInteraction = () => {
  if (process.stdin.isTTY) {
    process.stdout.write('Welcome to Holberton School, what is your name?\n');
    process.stdin.on('data', (input) => {
      process.stdout.write(`Your name is: ${input}`);
    });
  } else {
    process.stdout.write('Welcome to Holberton School, what is your name?\n');
    process.stdin.on('data', (input) => {
      process.stdout.write(`Your name is: ${input}`);
    });
    // Handle non-TTY environment (optional)
    process.stdin.on('end', () => {
      process.stdout.write('This important software is now closing\n');
    });
  }
};
if (process.stdin.isTTY) {
  userInputInteraction();
} else {
  userInputInteraction();
}
