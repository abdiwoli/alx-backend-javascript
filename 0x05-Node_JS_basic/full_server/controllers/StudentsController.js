import readDatabase from '../utils';

class StudentsController {
  // eslint-disable-next-line space-before-function-paren
  static getAllStudents (req, res) {
    readDatabase('database.csv')
      .then((names) => {
          res.status(200);
        res.write('This is the list of our students\n');
        const lines = [];
        for (const [key, value] of Object.entries(names)) {
          lines.push(`Number of students in ${key}: ${value.length}. List: ${value}`);
        }
        res.send(lines.join('\n'));
      })
      .catch(() => {
          res.status(500);
        res.send('Cannot load the database');
      });
  }

  // eslint-disable-next-line space-before-function-paren
  static getAllStudentsByMajor (req, res) {
    // eslint-disable-next-line no-useless-escape
    const url = new URL(req.url, `http://${req.headers.host}`);
    // eslint-disable-next-line no-useless-escape
    const match = url.pathname.match(/^\/students\/([^\/]+)$/);
    const major = match ? match[1] : null;
    if ((major === 'CS') || (major === 'SWE')) {
      res.status(200);
      readDatabase('database.csv')
            .then((names) => {
          res.send(`List: ${names[major].join(', ')}`);
        })
        .catch(() => {
          res.status(500);
          res.send('Cannot load the database');
        });
    } else {
      res.status(500);
      res.send('Major parameter must be CS or SWE');
    }
  }
}

export default StudentsController;
