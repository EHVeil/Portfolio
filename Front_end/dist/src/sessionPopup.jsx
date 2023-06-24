import React from 'react';

function SessionPopup(props) {
  return (
    <div className="popup">
      <form name="newSessionForm">
        <input placeholder="Date" data-forminput="date" value={props.inputs.date} onChange={props.handleForm}></input>
        <input placeholder="Category" data-forminput="category" value={props.inputs.category} onChange={props.handleForm}></input>
        <input placeholder="Activity" data-forminput="activity" value={props.inputs.activity} onChange={props.handleForm}></input>
        <input placeholder="Length" data-forminput="length" value={props.inputs.length} onChange={props.handleForm}></input>
        <input type="button" value="Save" className="button" onClick={props.handleSubmit} />
        <input type="button" value="Cancel" className="button" onClick={props.handlePopup} />
      </form>
    </div>
  )
};

export default SessionPopup;