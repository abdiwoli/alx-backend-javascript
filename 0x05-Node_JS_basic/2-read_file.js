// read csv file
const fs = require('fs');

const countStudents = (dataPath) => {
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }

  try {
    // Read file synchronously and convert to string
    const fileContent = fs.readFileSync(dataPath, 'utf-8');

    // Split file content into lines
    const lines = fileContent.trim().split('\n');

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

    // Log total number of students
    console.log(`Number of students: ${students.length}`);

    // Group students by field
    const fieldGroups = {};
    students.forEach((student) => {
      const { field, firstname } = student;
      if (!fieldGroups[field]) {
        fieldGroups[field] = [];
      }
      fieldGroups[field].push(firstname);
    });

    // Log number of students in each field
    for (const [field, firstNames] of Object.entries(fieldGroups)) {
      console.log(`Number of students in ${field}: ${firstNames.length}. List: ${firstNames.join(', ')}`);
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
};

module.exports = countStudents;
