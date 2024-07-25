const { parse } = require('csv-parse');
const fs = require('fs');

// Use fs.readFileSync instead of promisify
const readFileSync = (path, encoding) => fs.readFileSync(path, encoding);

const parseSync = (data) => {
  try {
    return parse(data, { columns: true, trim: true });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  try {
    const data = readFileSync(path, 'utf8');
    const records = parseSync(data);
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
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
