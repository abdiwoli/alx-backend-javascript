const { readDatabase } = require('../utils');

class StudentsController {
  // eslint-disable-next-line
    static getAllStudents (req, res) {
    if (!process.argv[2]) {
      res.status(500).contentType('text/plain').send('Cannot load the database');
      return;
    }
    readDatabase(process.argv[2])
      .then((data) => {
        const lines = [];
        for (const [field, firstNames] of Object.entries(data.fieldGroups)) {
          lines.push(`Number of students in ${field}: ${firstNames.length}. List: ${firstNames.join(', ')}`);
        }
        const responseText = `This is the list of our students\nNumber of students: ${data.numStudents}\n${lines.join('\n')}`;
        res.status(200).set('Content-Type', 'text/plain').send(responseText);
      })
      .catch(() => {
        res.status(500).contentType('text/plain').send('Cannot load the database');
      });
  }

  // eslint-disable-next-line
  static getAllStudentsByMajor (req, res) {
    if (!process.argv[2]) {
      res.status(500).contentType('text/plain').send('Cannot load the database');
      return;
    }
    const { major } = req.params;
    if (!major) {
      res.status(500).contentType('text/plain').send('Major parameter is missing');
      return;
    }

    readDatabase(process.argv[2])
      .then((data) => {
        const fieldGroup = data.fieldGroups[major];
        if (!fieldGroup) {
          res.status(500).contentType('text/plain').send('Major parameter must be CS or SWE');
          return;
        }
        const responseText = `List: ${fieldGroup.join(', ')}`;
        res.status(200).set('Content-Type', 'text/plain').send(responseText);
      })
      .catch(() => {
        res.status(500).contentType('text/plain').send('Cannot load the database');
      });
  }
}

export default StudentsController;
