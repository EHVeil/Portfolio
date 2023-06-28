const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const client = require('./mongo.js');


//verify the session both here and on the server in the back end
// to verify here retrieve the session id from a cookie and request the current session id from the mongostore
//send the session id over with every request and compare it again in the back end server

//provide a secure connection over SSL to keep sessions safe

app.get('/', (req, res) => {

})



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