import React from 'react';
import './Person.css';

const person = (props) => {
  let employee = null;

  if (props.employee) {
    employee = (<div className="check"></div>)
  }

  return (
    <div className="person" id={props.id}>
      <div className="cell name-job">
        <div className="name">{props.name}</div>
        <div className="job">{props.job}</div>
      </div>
      <div className="cell age">{props.age}</div>
      <div className="cell nickname">{props.nick}</div>
      <div className="cell employee">
        <div className="checkbox" onClick={props.toggleEmployee}>
          {employee}
        </div>
      </div>
      <div className="cell delete" onClick={props.delete}>Delete</div>
    </div>
  );
}

export default person;