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
  if (!fs.existsSync(path)) {
    return Promise.reject(new Error('File is not accessible'));
  }

  try {
    const data = await readFileAsync(path, 'utf8');
    const records = await parseAsync(data);
    const fields = records.reduce((obj, val) => {
      const key = val.field;
      if (!obj[key]) {
        // eslint-disable-next-line no-param-reassign
        obj[key] = [];
      }
      obj[key].push(val);
      return obj;
    }, {});
    const lines = {};
    for (const [key, records] of Object.entries(fields)) {
      lines[key] = records.map((el) => el.firstname);
    }
    return lines;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default readDatabase;
