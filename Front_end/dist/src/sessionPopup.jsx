import React from 'react';

function SessionPopup(props) {
  return (
    <form>
      <input placeholder="Name"></input>
      <input placeholder="Category"></input>
      <input placeholder="Activity"></input>
      <input placeholder="Length"></input>
      <div>
        <span className="saveButton">
          Save
        </span>
        <span className="cancelButton">
          Cancel
        </span>
      </div>
    </form>
  )
};

export default SessionPopup;