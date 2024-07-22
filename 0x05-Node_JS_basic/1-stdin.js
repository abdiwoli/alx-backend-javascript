process.stdout.write('Welcome to Holberton School, what is your name?\n');

const print = (data) => {
  console.log(`Your name is: ${data.toString().trim()}`);
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
};

process.stdin.on('data', print);

