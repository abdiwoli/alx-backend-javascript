class AppController {
  // eslint-disable-next-line space-before-function-paren
  static getHomepage(req, res) {
      res.status(200);
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello Holberton School!');
  }
}

export default AppController;
