/* eslint-disable */
import readDatabase from '../utils.js';

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((names) => {
        res.status(200);
        let responseText = 'This is the list of our students\n';
        for (const [key, value] of Object.entries(names)) {
          responseText += `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`;
        }
        res.end(responseText);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const match = url.pathname.match(/^\/students\/([^\/]+)$/);
    const major = match ? match[1] : null;

    if (major === 'CS' || major === 'SWE') {
      readDatabase(process.argv[2])
        .then((names) => {
          res.status(200).send(`List: ${names[major].join(', ')}\n`);
        })
        .catch(() => {
          res.status(500).send('Cannot load the database');
        });
    } else {
      res.status(400).send('Major parameter must be CS or SWE');
    }
  }
}

export default StudentsController;
