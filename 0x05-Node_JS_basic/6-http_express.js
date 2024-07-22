const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200);
  res.send('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log('server is runing');
});

module.exports = app;
