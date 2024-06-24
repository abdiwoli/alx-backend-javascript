#!/bin/user/node
const fs = require('readline');

/* eslint-disable comma-dangle */
const readInterFace = fs.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Welcome to Holberton School, what is your name?\n'

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
readInterFace.on('line', printLine);
readInterFace.on('close', close);
readInterFace.prompt();
