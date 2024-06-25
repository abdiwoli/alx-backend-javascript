const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

// Function to parse the CSV data
const readLine = (data) => {
  const lines = data.trim().split('\n');
  const headers = lines[0].split(',');

  const students = [];

  // Process each line after the header
  for (let i = 1; i < lines.length; i += 1) {
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
    fieldGroups
  };

  return result;
};

// Function to read the database file
const readDatabase = (path) => {
  if (!fs.existsSync(path)) {
    return Promise.reject(new Error('Cannot load the database'));
  }
  return readFile(path, 'utf8')
    .then((data) => readLine(data))
    .catch(() => {
      throw new Error('Cannot load the database');
    });
};

module.exports = { readDatabase };
