import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      username: '',
      password: ''
    }
    this.handleForm = this.handleForm.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

//step 1: client sign up
//creating an account, client sends a post with a password and username

//step 2: hash the password, store the username and the hashed password to the db

//step 3: user log in, provides username and password again sends a post request to server

//step 4: authenticate, server looks up username, hashes the supplied password and compares it to the hashed pass on the server

//step 5: generate access token, create an access token which identifies session
//store it in db associated with that user
//attach it to a response cookie to be returned to the client
//set an expiration date for the users session

//step 6:
//attach session access token from the cookie to every req and res,
//this will allow the client to access any user specific info

handleLogin(e) {
  e.preventDefault();
  console.log('login initiated');
  //take the username and password from state and send it to the server
  axios({
    method: 'post',
    url: '/auth'
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  //wait for the server response
  //if the server responds with an ok redirect the user to the sessions page
  //if the server responds with a negative show the user the error message
}

handleForm(e) {
  console.log('field:', e.target.dataset.field, ', value:', e.target.value);
  let newState = {};
  let field = e.target.dataset.field;
  let input = e.target.value;
  newState[field] = input;
  this.setState(newState);
}

  render() {
    return (
      <div>
        <form>
          <input data-field="username" onChange={this.handleForm} placeholder="Username"></input>
          <input data-field="password" onChange={this.handleForm} placeholder="Password"></input>
          <input onClick={this.handleLogin} type="submit" />
        </form>
      </div>
    )
  }
}

export default Login;