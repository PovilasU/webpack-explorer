const express = require('express');
const bodyParser = require('body-parser');
const { join } = require('path');
const app = express();
const port = 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  // Logger
  let time = new Date();
  console.log(
    `${req.method} to ${
      req.originalUrl
    } at ${time.getHours()}:${time.getMinutes()}}`
  );
  next();
});
app.use(express.static('dist'));
app.listen(port, '0.0.0.0', (req, res) => {
  console.log('The server has been started');
});
