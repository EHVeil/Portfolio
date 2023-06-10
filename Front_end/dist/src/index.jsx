import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import{ createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//Components
import Timer from './Timer.jsx';
import Sessions from './sessions.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Timer />,
  },
  {
    path: "/sessions",
    element: <Sessions />,
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

root.render(<App />);

export default App;