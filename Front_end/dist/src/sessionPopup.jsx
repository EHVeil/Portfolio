import React from 'react';

function SessionPopup(props) {
  return (
    <form className="popup">
      <input placeholder="Name"></input>
      <input placeholder="Category"></input>
      <input placeholder="Activity"></input>
      <input placeholder="Length"></input>
      <div>
        <span className="button">
          Save
        </span>
        <span className="button">
          Cancel
        </span>
      </div>
    </form>
  )
};

export default SessionPopup;