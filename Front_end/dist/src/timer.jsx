import React from 'react';

class Timer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
        Timer component
        <div className="timerButton">
          Start
        </div>
        <div>
          Info form
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