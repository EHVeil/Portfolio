import React from 'react';
import SessionPopup from './sessionPopup.jsx';
import NavButton from './navButton.jsx';
import SessionTile from './sessionTile.jsx';
import axios from 'axios';

class Sessions extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      popup: false,
      date: '',
      category: '',
      activity: '',
      length: '',
      sessions: []
    }
    this.getSessions = this.getSessions.bind(this);
    this.handlePopup = this.handlePopup.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(e) {
    //activate get sessions
    console.log(this.props);
  }

  getSessions(e) {
     //make a get request to the server for all of the current users sessions
     axios({
      method: 'get',
      url: '/sessions',
      data: {
        user: this.props.user
      }
     })
      .then((res) => console.log(res))
  }

  handlePopup(e) {
    this.setState(pState => {
      //toggles the popup
      return { popup: !pState.popup }
    }, () => {
      //if the popup state is changed to false this clears the form and its state
      if (!this.state.popup) {
        this.setState({
          date: '',
          category: '',
          activity: '',
          length: ''
        })
      }
    });
  }

  handleForm(e) {
    //each form input has an identifying string in its dataset
    let formInput = e.target.dataset.forminput;
    //the value of the targeted input
    let value = e.target.value;
    let newState = {};
    newState[formInput] = value;
    this.setState(newState);
  }


  //NEEDS FORM VALIDATION
  //maybe in handleForm
  handleSubmit(e) {
    e.preventDefault();
    //send a post request to the client server with the form values tracked in state
    axios({
      method: 'post',
      url: '/sessions'
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    //once the session is submitted I'll use handlePopup to close the popup and clear the state
    this.handlePopup();
    console.log(e);
  }

  render() {
    //an object that allows me to pass this portion of state as props without individually declaring them
    let inputs ={
      date: this.state.date,
      category: this.state.category,
      activity: this.state.activity,
      length: this.state.length
    };
    //once the add session button is pressed then a pop up with the session creater form should appear.
    return (
      <div>
          <NavButton />
          <span onClick={this.state.popup ? null : this.handlePopup}>Add Session Button</span>
        {/* the session editor modal will go here as a conditional render based on a state variable. th
        the state variable will be controlled by the add session button
        set the css so the modal is indeed a popup. */}
        {this.state.popup ? <SessionPopup inputs={inputs} handleSubmit={this.handleSubmit} handlePopup={this.handlePopup} handleForm={this.handleForm} /> : null}
        {/* users will be able to click the session tile to view the full session tile including notes etc
        they will also have the option to edit the session notes while in this view */}
        <SessionTile />
      </div>
    )
  }
};

export default Sessions;