const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../dist'));


app.get('/', (req, res) => {
  res.send('Hello world');
})

app.listen(port, () => {
  console.log(`Express server port ${port}`);
})