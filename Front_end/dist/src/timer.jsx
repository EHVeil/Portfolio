import React from 'react';

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
      </div>
    )
  }
}

export default Timer;