
const http = require('http');
const countStudents = require('./3-read_file_async');

const server = http.createServer((req, res) => {
  if (req.url === '/students') {
    if (!process.argv[2]) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('This is the list of our students Cannot load the database');
    }
    res.write('This is the list of our students\n');

    countStudents(process.argv[2])
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        const lines = [];
        for (const [field, firstNames] of Object.entries(data.fieldGroups)) {
          lines.push(`Number of students in ${field}: ${firstNames.length}. List: ${firstNames.join(', ')}`);
        }
        res.write(`Number of students: ${data.numStudents}\n`);
        res.write(lines.join('\n'));
        res.end();
      })
      .catch(() => {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('This is the list of our students Cannot load the database');
      });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  }
});

server.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = server;
