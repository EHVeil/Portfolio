import React from 'react';
import NavButton from './navButton.jsx';

class Timer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      start: false,
      time: 0
    }
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }

  handleStart(e) {
    this.setState({
      start: true
    })
    console.log(this.state.start, 'start');
  }

  handleStop(e) {
    this.setState({
      start: false
    });
    console.log(this.state.start, 'stop')
  }

  render() {
    const display = 'display';
    return (
      <div>
        <NavButton />
        {this.state.start ? <div onClick = {this.handleStop}>{display}</div> : <div onClick = {this.handleStart}>Start</div>  }
        {/* once the start button is pressed a timer will be displayed with seconds minutes and hours and they will begin counting, being kept track of in state.
          once the button is pressed again the timer will stop and the time will be recorded for the currently defined session, which will then ask if you want to save and send to the database. */}
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