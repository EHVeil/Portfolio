import React from 'react';

function SessionPopup(props) {
  return (
    <div className="popup">
      <form name="newSessionForm">
        <input placeholder="Name" data-forminput="name" value={props.inputs.name} onChange={props.handleForm}></input>
        <input placeholder="Category" data-forminput="category" value={props.inputs.category} onChange={props.handleForm}></input>
        <input placeholder="Activity" data-forminput="activity" value={props.inputs.activity} onChange={props.handleForm}></input>
        <input placeholder="Length" data-forminput="length" value={props.inputs.length} onChange={props.handleForm}></input>
        <input type="button" value="Save" className="button" onClick={props.handleSubmit} />
        <input type="button" value="Cancel" className="button" data-action="seshClosePopup" onClick={props.handleSession} />
        <div>
        </div>
      </form>
    </div>
  )
};

export default SessionPopup;