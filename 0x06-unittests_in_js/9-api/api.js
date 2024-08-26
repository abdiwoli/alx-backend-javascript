const express = require('express');
const app = express();
const PORT = 7865;

// Middleware to handle requests
app.use(express.text()); // To parse text/plain responses

// Route for index page
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

// Route for cart page
app.get('/cart/:id', (req, res) => {
  const id = req.params.id;

  if (!isNaN(id)) {
    res.status(200).send(`Cart details for ID ${id}`);
  } else {
    res.status(404).send('Not found');
  }
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = server;
