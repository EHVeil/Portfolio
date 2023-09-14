const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');
const port = 3000;

app.use(express.static(__dirname + '/../dist'));
app.use(express.json());

app.get('*', (req, res) => {
  //an html mockup of your index file is required for smooth navigation in react router
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

//verify the session both here and on the server in the back end
// to verify here retrieve the session id from a cookie and request the current session id from the mongostore
//send the session id over with every request and compare it again in the back end server

//provide a secure connection over SSL to keep sessions safe

app.post('/', (req, res) => {
  //send a request to the db server
  axios({
    method: 'post',
    url: 'http://localhost:4000/auth',
    data: req.body
  })
  .then((data) => {
      console.log('logged in, port 3000');
      res.status(200).send(data.data);
  })
  .catch((err) => {
    console.log('login failed, port 3000');
    res.status(401).send(err);
  })
  //res.send('received');
  //if the username and password match a username and password in the db then send a success code with a message to the client
  //if the username and password dont match any users in the db then send an error message to the client with a message
  //

});

app.get('/sessions', (req, res) => {
  //retrieve all the practice sessions from a given user and send the practice sessions back to the client to be rendered in the sessions view.
  console.log('sessions get');
});

app.post('/sessions', (req, res) => {
  //save any practice sessions created by the user.
  //perhaps send over a flag that distinguishes practice sessions created in the timer and practice sessions created in the editor.
  console.log('sessions post');
  res.send('session posted');
});


app.listen(port, () => {
  console.log(`Express server port ${port}`);
});