import React from 'react';
import SessionPopup from './sessionPopup.jsx';
import NavButton from './navButton.jsx';
import SessionTile from './sessionTile.jsx';

class Sessions extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      popup: false
    }
    this.handleSession = this.handleSession.bind(this);
  }

  handleSession() {
    this.setState(pState => {
      return { popup: !pState.popup }
    })
  }
  render() {
    //once the add session button is pressed then a pop up with the session creater form should appear.
    return (
      <div>
        <NavButton />
        <div onClick={this.handleSession}>Add Session Button</div>
        {/* the session editor modal will go here as a conditional render based on a state variable. th
        the state variable will be controlled by the add session button
        set the css so the modal is indeed a popup. */}
        {this.state.popup ? <SessionPopup handleSession={this.handleSession} /> : null}
        {/* users will be able to click the session tile to view the full session tile including notes etc
        they will also have the option to edit the session notes while in this view */}
        <SessionTile />
      </div>
    )
  }
};

export default Sessions;