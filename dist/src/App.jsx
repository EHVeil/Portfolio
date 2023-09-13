import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import axios from 'axios';
import { redirect } from 'react-router-dom';
//Components
import SessionTimer from './sessionTimer.jsx';
import Sessions from './sessions.jsx';
import StatisticsView from './statistics.jsx';
import Login from './login.jsx';

async function loginAction({params, request}) {
  let formData = await request.formData();
  let user = {
    username: formData.get("username"),
    password: formData.get("password")
  }
  try {
    var response = await axios({
      method: 'post',
      url: '/',
      data: user
    })
  } catch (err) {
    console.log(err);
  }
  if (response.status == 200) {
    return redirect("/timer")
  }

  return null;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    action: loginAction,
    //errorElement:
  },
  {
    path: "/timer",
    element: <SessionTimer />
    //errorElement:
  },
  {
    path: "/sessions",
    element: <Sessions/>,
    //errorElement:
  },
  {
    path: "/statistics",
    element: <StatisticsView />,
    //errorElement:
  }
])

//create a handler for the login, once the user has logged in successfully provide a session cookie etc and provide the user id to the app state.

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'Thomas'
    };
  }
  render() {
    return (
      <StrictMode>
        <RouterProvider router = {router} />
      </StrictMode>
    )
  }
}

export default App;