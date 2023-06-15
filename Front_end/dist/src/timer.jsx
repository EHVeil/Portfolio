import React from 'react';
import NavButton from './navButton.jsx';

class Timer extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <NavButton />
        <div>
          Start
        </div>
        <div>
          <form>
            <input placeholder="Category"></input>
            <input placeholder="Activity"></input>
            <input placeholder="Notes"></input>
          </form>
        </div>
      </div>
    )
  }
};

export default Timer;