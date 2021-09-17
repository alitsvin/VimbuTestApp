const express = require('express');
const app = express();
const port = 3000;

const data = require('./instructors.json');

app.get('/instructors', (req, res) => {
  res.send(data);
});

app.get('/instructors/:instructorId', (req, res, next) => {
  const id = parseInt(req.params.instructorId);
  if (typeof id !== 'number') {
    res.status(400).send(null);
    return next();
  }

  const instructor = data.find(i => i.id === id);
  res.send(instructor);
});

app.listen(port, () => {
  console.log(`The app listening at http://localhost:${port}`);
});
