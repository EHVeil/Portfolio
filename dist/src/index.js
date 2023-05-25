import React from 'react';
import{ createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

class App extends React.component {
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