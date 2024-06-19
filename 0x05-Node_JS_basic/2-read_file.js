// read csv file
const fs = require('fs');
// eslint-disable-next-line import/no-unresolved
const { parse } = require('csv-parse/sync');

function countStudents(path) {
  try {
    const fileContent = fs.readFileSync(path, 'utf-8');
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    });

    const fieldGroups = {};
    records.forEach((record) => {
      const { field } = record;
      const firstName = record.firstname;
      if (!fieldGroups[field]) {
        fieldGroups[field] = [];
      }
      fieldGroups[field].push(firstName);
    });

    for (const [field, firstNames] of Object.entries(fieldGroups)) {
      console.log(`Number of students in ${field}: ${firstNames.length}. List: ${firstNames.join(', ')}`);
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}

// export the module
module.exports = countStudents;
