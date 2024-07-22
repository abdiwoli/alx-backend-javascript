const { parse } = require('csv-parse');
const fs = require('fs');
const { promisify } = require('util');

// Promisify fs.readFile
const readFileAsync = promisify(fs.readFile);

const parseAsync = (data) => new Promise((resolve, reject) => {
  parse(data, { columns: true, trim: true }, (err, records) => {
    if (err) {
      return reject(err);
    }
    return resolve(records);
  });
});

const countStudents = async (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  try {
    const data = await readFileAsync(path, 'utf8');
    const records = await parseAsync(data);
    console.log(`Number of students: ${records.length}`);
    const fields = await records.reduce((obj, val) => {
      const key = val.field;
      // eslint-disable-next-line no-param-reassign
      if (!obj[key]) { obj[key] = []; }
      obj[key].push(val);
      return obj;
    }, {});

    for (const [key, records] of Object.entries(fields)) {
      const namesArray = records.map((el) => el.firstname);
      const names = namesArray.join(', ');
      console.log(`Number of students in ${key}: ${records.length}. List: ${names}`);
    }
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = countStudents;
