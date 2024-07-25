class AppController {
  // eslint-disable-next-line space-before-function-paren
  static getHomepage(req, res) {
      res.status(200);
      res.send('Hello Holberton School!');
  }
}

export default AppController;
