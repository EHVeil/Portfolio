import React from 'react';
import SessionPopup from './sessionPopup.jsx';
import NavButton from './navButton.jsx';
import SessionTile from './sessionTile.jsx';

class Sessions extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      popup: false,
      name: '',
      category: '',
      activity: '',
      length: ''
    }
    this.handleSession = this.handleSession.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSession(e) {
    console.log(e.target.dataset.action);
    this.setState(pState => {
      //toggles the popup
      return { popup: !pState.popup }
    })
  }

  handleForm(e) {
    let formInput = e.target.dataset.forminput;
    let value = e.target.value;
    let newState = {};
    newState[formInput] = value;
    this.setState(newState);
    console.log(e.target.dataset.forminput, e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  render() {
    let inputs ={
      name: this.state.name,
      category: this.state.category,
      activity: this.state.activity,
      length: this.state.length
    };
    //once the add session button is pressed then a pop up with the session creater form should appear.
    return (
      <div>
          <NavButton />
          <span data-action="seshPopupOpen" onClick={this.handleSession}>Add Session Button</span>
        {/* the session editor modal will go here as a conditional render based on a state variable. th
        the state variable will be controlled by the add session button
        set the css so the modal is indeed a popup. */}
        {this.state.popup ? <SessionPopup inputs={inputs} handleSubmit={this.handleSubmit} handleSession={this.handleSession} handleForm={this.handleForm} /> : null}
        {/* users will be able to click the session tile to view the full session tile including notes etc
        they will also have the option to edit the session notes while in this view */}
        <SessionTile />
      </div>
    )
  }
};

export default Sessions;