const http = require('http');
const countStudents = require('./3-read_file_async');

const server = http.createServer((req, res) => {
  if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    countStudents('database.csv')
      .then((data) => {
        res.write(`Number of students: ${data.numStudents}\n`);
        const lines = [];
        for (const [field, firstNames] of Object.entries(data.fieldGroups)) {
          lines.push(`Number of students in ${field}: ${firstNames.length}. List: ${firstNames.join(', ')}`);
        }
        res.write(lines.join('\n'));
        res.end();
      })
      .catch((error) => {
        res.end(`${error.message}\n`);
      });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  }
});

server.listen(1245, () => {
  console.log('Server is listening on port 1245');
});
