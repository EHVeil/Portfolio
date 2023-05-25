import React from 'react';
import ReactDOM from 'react-dom';
import{ createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>Hello World</div>
    )
  }
}

root.render(<App />);

export default App;