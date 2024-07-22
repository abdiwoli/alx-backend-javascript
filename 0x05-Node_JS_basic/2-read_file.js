const fs = require('fs');
const { parse } = require('csv-parse');

const parseAsync = (data, options) => new Promise((resolve, reject) => {
  parse(data, options, (err, records) => {
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
  const data = fs.readFileSync(path, 'utf-8');
  const records = await parseAsync(data, { columns: true, trim: true });
  console.log(`Total records read: ${records.length}`);

  const fieldGroup = records.reduce((obj, record) => {
    const key = record.field.toUpperCase();
    if (!obj[key]) {
      obj[key] = [];
    }
    obj[key].push(record);
    return obj;
  }, {});

  for (const [key, records] of Object.entries(fieldGroup)) {
    const namesArray = records.map((el) => el.firstname);
    const names = namesArray.join(', ');
    console.log(`Number of students in ${key}: ${records.length}. List: ${names}`);
  }
};

module.exports = countStudents;
