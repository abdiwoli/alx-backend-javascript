console.log('Welcome to Holberton School, what is your name?');

const print = (data) => {
  console.log(`Your name is: ${data.toString().trim()}`);
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
  process.exit();
};

process.stdin.on('data', print);
