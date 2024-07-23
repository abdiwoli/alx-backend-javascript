class AppController {
  // eslint-disable-next-line space-before-function-paren
  static getHomepage(req, res) {
    res.status(200);
    res.end('Hello Holberton School!');
  }
}

export default AppController;
