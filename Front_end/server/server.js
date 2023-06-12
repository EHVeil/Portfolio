const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../dist'));


app.get('*', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title></title>
      </head>
      <body>
        <main id="root"></main>
        <script src="./main.js"></script>
      </body>
    </html>
  `);
})

app.listen(port, () => {
  console.log(`Express server port ${port}`);
})