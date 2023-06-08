import React from 'react';
import ReactDOM from 'react-dom';
import{ createRoot } from 'react-dom/client';
import Timer from './timer.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
      Hello World
      <Timer />
      </>

    )
  }
}

root.render(<App />);

export default App;