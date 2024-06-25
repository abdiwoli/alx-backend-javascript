const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  if (!process.argv[2]) {
    res.status(404).contentType('text/plain').send('This is the list of our students\nCannot load the database');
    return;
  }

  countStudents(process.argv[2])
    .then((data) => {
      const lines = [];
      for (const [field, firstNames] of Object.entries(data.fieldGroups)) {
        lines.push(`Number of students in ${field}: ${firstNames.length}. List: ${firstNames.join(', ')}`);
      }
      const responseText = `This is the list of our students\nNumber of students: ${data.numStudents}\n${lines.join('\n')}`;
      res.status(200).set('Content-Type', 'text/plain');
      res.send(responseText);
    })
    .catch(() => {
      res.status(404).contentType('text/plain').send('This is the list of our students\nCannot load the database');
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
