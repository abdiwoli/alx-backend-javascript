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

const readDatabase = async (path) => {
  // Check if the file exists
  if (!fs.existsSync(path)) {
    return Promise.reject(new Error("File is not accessible"));
  }

  try {
    // Read the file data
    const data = await readFileAsync(path, 'utf8');
    // Parse the CSV data
    const records = await parseAsync(data);
    // Reduce records into fields
    const fields = records.reduce((obj, val) => {
      const key = val.field;
      if (!obj[key]) { obj[key] = []; }
      obj[key].push(val);
      return obj;
    }, {});
    // Collect lines to return
    const lines = [];
    for (const [key, records] of Object.entries(fields)) {
      const namesArray = records.map((el) => el.firstname);
      const names = namesArray.join(', ');
      lines.push(`Number of students in ${key}: ${records.length}. List: ${names}`);
    }
    return lines;
  } catch (error) {
    // Handle errors
    return Promise.reject(error);
  }
};

module.exports = readDatabase;
