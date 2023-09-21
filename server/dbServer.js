const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo');
const aMongo = require('./authMongo.js');
const session = require('express-session');
const port = 4000;

//routes to communicate with the database
//authentication routes
app.use(express.json());

app.post('/auth', async (req, res) => {
  //receive user object
  console.log(req.body);
  //check user object against db
  const match = await aMongo.authenticate(req.body);
  //if all information matches a user send back a success code and a message
  console.log('match:', match);
  if (match) {
    //once logged in create a cookie
    res.sendStatus(200);
  } else {
    //if there is no match send back an error code and a message
    res.sendStatus(401);
  }
});

//session creation routes

app.listen(port, () => {
  console.log(`Database server on port ${port}`);
})