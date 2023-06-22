import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//Components
import SessionTimer from './sessionTimer.jsx';
import Sessions from './sessions.jsx';
import StatisticsView from './statistics.jsx';
import Login from './login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/timer",
    element: <SessionTimer />
  },
  {
    path: "/sessions",
    element: <Sessions />,
  },
  {
    path: "/statistics",
    element: <StatisticsView />,
  }
])

//create a handler for the login, once the user has logged in successfully provide a session cookie etc and provide the user id to the app state.

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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