const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const readLine = (data) => {
  const lines = data.trim().split('\n');

  // Assuming the first line contains headers
  const headers = lines[0].split(',');

  // Initialize an array to hold student objects
  const students = [];

  /* eslint-disable no-plusplus */
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');

    // Create student object with header values as keys
    const student = {};
    headers.forEach((header, index) => {
      student[header.trim()] = values[index].trim();
    });

    // Push student object to students array
    students.push(student);
  }

  // Group students by field
  const fieldGroups = {};
  students.forEach((student) => {
    const { field, firstname } = student;
    if (!fieldGroups[field]) {
      fieldGroups[field] = [];
    }
    fieldGroups[field].push(firstname);
  });

  // Prepare result object to return
  const result = {
    numStudents: students.length,
    fieldGroups: fieldGroups,
  };

  return result;
};

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    return Promise.reject(new Error('Cannot load the database'));
  }
  return readFile(path, 'utf8')
    .then((data) => {
      return readLine(data); // Return the result from readLine
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
};

module.exports = countStudents;
