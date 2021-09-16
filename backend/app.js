const express = require('express');
const app = express();
const port = 3000;

const data = require('./instructors.json');

app.get('/instructors', (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`The app listening at http://localhost:${port}`);
});
