import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      username: '',
      password: ''
    }
  }

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