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

const students = async (req, res) => {
  if (!fs.existsSync('database.csv')) {
    res.statusCode = 404;
    res.end('Cannot load the database');
  }
  try {
    const data = await readFileAsync('database.csv', 'utf8');
    const records = await parseAsync(data);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');
    res.write(`Total records read: ${records.length}\n`);
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
    return res.end(error.toString());
  }
};

module.exports = students;
