/* eslint-disable */
const { parse } = require('csv-parse');
const fs = require('fs').promises;

const countStudents = (path, logger = console.log) => fs.readFile(path, 'utf8')
  .then((data) => new Promise((resolve, reject) => {
    parse(data, { columns: true, trim: true }, (err, records) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Filter out any empty lines
      records = records.filter((record) => Object.values(record).some((val) => val));

      logger(`Number of students: ${records.length}`);
      const fields = records.reduce((obj, val) => {
        const key = val.field;
        if (!obj[key]) {
          obj[key] = [];
        }
        obj[key].push(val);
        return obj;
      }, {});

      for (const [key, students] of Object.entries(fields)) {
        const namesArray = students.map((student) => student.firstname);
        const names = namesArray.join(', ');
        logger(`Number of students in ${key}: ${students.length}. List: ${names}`);
      }
      resolve(records);
    });
  }))
  .catch(() => {
    throw new Error('Cannot load the database');
  });

module.exports = countStudents;
