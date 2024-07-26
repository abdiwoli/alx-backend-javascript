const express = require('express'); // Correct the import

const app = express();

app.listen(7865, () => console.log('API available on localhost port 7865'));

app.get('/', (req, res) => {
    res.status(200).send('Welcome to the payment system');
});



module.exports = app;
