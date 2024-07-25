const { parse } = require('csv-parse');
const fs = require('fs');
const { promisify } = require('util');

// Promisify fs.readFile
const readFileAsync = promisify(fs.readFile);

const parseAsync = (data) => new Promise((resolve, reject) => {
  parse(data, { columns: true, trim: true }, (err, records) => {
    if (err) {
      return reject(new Error('Error: Cannot load the database'));
    }
    resolve(records);
  });
});

const countStudents = async (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Error: Cannot load the database');
  }
  try {
    const data = await readFileAsync(path, 'utf8');
    const records = await parseAsync(data);
    console.log(`Number of students: ${records.length}`);
    const fields = records.reduce((obj, val) => {
      const key = val.field;
      if (!obj[key]) { obj[key] = []; }
      obj[key].push(val);
      return obj;
    }, {});

    for (const [key, records] of Object.entries(fields)) {
      const namesArray = records.map((el) => el.firstname);
      const names = namesArray.join(', ');
      console.log(`Number of students in ${key}: ${records.length}. List: ${names}`);
    }
    return records;
  } catch (err) {
    throw new Error('Error: Cannot load the database');
  }
};

module.exports = countStudents;
