import React from 'react';
import { Link } from 'react-router-dom';

class Timer extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
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
        <Link to="/sessions">sessions</Link>
      </div>
    )
  }
};

export default Timer;