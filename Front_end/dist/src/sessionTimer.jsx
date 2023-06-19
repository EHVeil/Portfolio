import React from 'react';
import NavButton from './navButton.jsx';
import Timer from './timer.jsx'

class SessionTimer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    const display = 'display';
    if (this.state.start) {
      console.log('timer start')
      setInterval(this.setState((pState) => { timer: pState.timer + 1 }), 10);
    }
    return (
      <div>
        <NavButton />
        <Timer />
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

export default SessionTimer;