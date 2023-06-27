import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      username: '',
      password: ''
    }
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

  render() {
    return (
      <div>
        <form>
          <input placeholder="Username"></input>
          <input placeholder="Password"></input>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Login;