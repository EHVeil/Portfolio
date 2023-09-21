const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/tenKAuth');

const userSchema = mongoose.Schema ({
  username: String,
  password: String
});

const User = mongoose.model('User', userSchema);

//save method to create new users

//authenticate method to check usernames and passwords to authenticate users
async function authenticate(user) {
  //check for users with the same username and password
  const userMatch = await User.find({username: user.username, password: user.password});

  //if a match is found return true
  if(userMatch[0]) {
    return true;
  }
  return false;
  //if none are found return false
};

exports.authenticate = authenticate;