const express = require('express');

const app = express();
const students = require('./students');

app.get('/', (req, res) => {
  res.status(200);
  res.end('Hello Holberton School!');
});

app.get('/students', students);

app.listen(1245, () => {
  console.log('server is runing');
});

module.exports = app;
