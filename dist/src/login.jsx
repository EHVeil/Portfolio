import React from 'react';
import axios from 'axios';
import { Form } from 'react-router-dom';

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
  // e.preventDefault();
  const user = this.state;
  //take the username and password from state and send it to the server
  axios({
    method: 'post',
    url: '/',
    data: user
  })
    .then((res) => {
      //if the server responds with an ok redirect the user to the sessions page
      console.log(res);
    })
    .catch((err) => {
      //if the server responds with a negative show the user the error message
      console.log(err);
    })
  //wait for the server response
}

handleForm(e) {
  let newState = {};
  let field = e.target.dataset.field;
  let input = e.target.value;
  newState[field] = input;
  this.setState(newState);
}

  render() {
    return (
      <div>
        <Form method="post" action="/">
          <input type="text" name="username" placeholder="Username"></input>
          <input type="text" name="password" placeholder="Password"></input>
          <button type="submit">Login</button>
        </Form>
        {/* Create a ternary here that will display the error message if a user fails to login, control with state variable */}
      </div>
    )
  }
}

export default Login;