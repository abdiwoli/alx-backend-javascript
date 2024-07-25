import express from 'express';
import route from './routes/index';

const app = express();

app.use(route);

app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

export default app;
module.exports = app;
