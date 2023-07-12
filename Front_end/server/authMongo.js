const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/tenKAuth');

const userSchema = mongoose.Schema ({
  username: String,
  password: String
});

const User = mongoose.model('User', userSchema);

