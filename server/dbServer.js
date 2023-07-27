const express = require('express');
const path = reqiuire('path');
const app = express();
const aMongo = require('./authMongo.js');
const port = 4000;

//routes to communicate with the database
//authentication routes

app.post('/auth', async (req, res) => {
  //receive user object
  console.log(req.body);
  //check user object against db
  await aMongo.authenticate(req.body.user);
  //if all information matches a user send back a success code and a message
  //if there is no match send back an error code and a message

});

//session creation routes

