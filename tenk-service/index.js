const express = require('express');
const app = express();
const path = require('path');
const port = 4000;
const client = require('./mongo.js');

//handle db connections
app.get('/db', (req, res) => {

});

app.listen(port, ()=> {
  console.log(`tenK is listening on ${port}`);
})