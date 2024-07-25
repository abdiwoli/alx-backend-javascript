const http = require('http');

const { parse } = require('csv-parse');
const fs = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

const parseAsync = (data) => new Promise((resolve, reject) => {
  parse(data, { columns: true, trim: true }, (err, records) => {
    if (err) {
      return reject(err);
    }
    return resolve(records);
  });
});

const countStudents = async (req, res) => {
  if (!fs.existsSync('database.csv')) {
    res.statusCode = 404;
    return res.end('This is the list of our students\nCannot load the database');
  }
  try {
    const data = await readFileAsync(process.argv[2], 'utf8');
    const records = await parseAsync(data);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');
    res.write(`Number of students: ${records.length}\n`);
    const fields = await records.reduce((obj, val) => {
      const key = val.field;
      // eslint-disable-next-line no-param-reassign
      if (!obj[key]) { obj[key] = []; }
      obj[key].push(val);
      return obj;
    }, {});
    const lines = [];
    for (const [key, records] of Object.entries(fields)) {
      const namesArray = records.map((el) => el.firstname);
      const names = namesArray.join(', ');
      lines.push(`Number of students in ${key}: ${records.length}. List: ${names}`);
    }
    return res.end(lines.join('\n'));
  } catch (error) {
      res.statusCode = 404;
    return res.end('This is the list of our students\nCannot load the database');
  }
};

const app = http.createServer((req, res) => {
  const { pathname } = new URL(req.url, 'http://localhost');
  switch (pathname) {
    case '/':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello Holberton School!');
      break;
    case '/students':
      countStudents(req, res);
      break;
    default:
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end();
  }
});

app.listen(1245, () => {
  console.log('server is ruinning');
});

module.exports = app;
