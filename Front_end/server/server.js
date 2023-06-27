const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const client = require('./mongo.js');

app.use(express.static(__dirname + '/../dist'));


//provide a secure connection over SSL to keep sessions safe
//

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

app.get('/sessions', (req, res) => {
  //retrieve all the sessions from a given user and send the sessions back to the client to be rendered in the sessions view.
  console.log('sessions get');
});

app.post('/sessions', (req, res) => {
  //save any sessions created by the user.
  //perhaps send over a flag that distinguishes sessions created in the timer and sessions created in the editor.
  console.log('sessions post');
  res.send('session posted');
});


app.listen(port, () => {
  console.log(`Express server port ${port}`);
});