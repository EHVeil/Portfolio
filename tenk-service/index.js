const express = require('express');
const app = express();
const path = require('path');
const port = 4000;
const client = require('./mongo.js');

app.use(express.static(__dirname + '/../dist'));

app.get('*', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="./styles.css" />
        <title>10,000 Hours</title>
      </head>
      <body>
        <div id="root"></div>
        <script src="./main.js"></script>
      </body>
    </html>
  `);
});

