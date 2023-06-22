import React from 'react';

function SessionPopup(props) {
  return (
    <div className="popup">
      <form>
        <input placeholder="Name"></input>
        <input placeholder="Category"></input>
        <input placeholder="Activity"></input>
        <input placeholder="Length"></input>
        <div>
          <span className="button">
            Save
          </span>
          <span className="button" onClick={props.handleSession}>
            Cancel
          </span>
        </div>
      </form>
    </div>
  )
};

export default SessionPopup;