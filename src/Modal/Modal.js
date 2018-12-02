import React from 'react';
import './Modal.css';

const modal = (props) => {

  let employee = null;

  if (props.employee) {
    employee = (<div className="check"></div>)
  }

  return (
    <div className="modal">
      <div className="wrapper">
        <div className="input name">
          <label>Name</label>
          <input type="text" name="name" onChange={props.changed} />
        </div>
        <div className="input job-title">
          <label>Job title</label>
          <input type="text" name="job" onChange={props.changed} />
        </div>
        <div className="input age">
          <label>Age</label>
          <input type="text" name="age" onChange={props.changed} />
        </div>
        <div className="input nickname">
          <label>Nickname</label>
          <input type="text" name="nick" onChange={props.changed} />
        </div>
        <div className="input employee">
          <label>Employee</label>
          <div className="checkbox" onClick={props.check}>
            {employee}
          </div>
        </div>
        <div className="divider"></div>
        <div className="button-bar">
          <button className="btn ok" onClick={props.submit}>OK</button>
          <button className="btn cancel" onClick={props.close}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default modal;