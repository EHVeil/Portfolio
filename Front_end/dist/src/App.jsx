import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//Components
import Timer from './Timer.jsx';
import Sessions from './sessions.jsx';
import StatisticsView from './statistics.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Timer />,
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