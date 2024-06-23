#!/bin/user/node
const fs = require('readline');

const readInterFace = fs.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Welcome to Holberton School, what is your name?\n'

});

const printLine = (data) => {
  console.log(`Your name is: ${data}`);
};

const close = () => {
  console.log('This important software is now closing');
};
readInterFace.on('line', printLine);
readInterFace.on('close', close);
readInterFace.prompt();
