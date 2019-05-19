import React from 'react';
import './Person.css';

const Person = props => {
  return (
    <div className="Person">
      <h3 onClick={props.click}>
        This is {props.name} {props.age}
      </h3>
      <div>{props.children}</div>
      <br />
      <div>
        {props.mobin ? (
          <input type="text" onChange={props.changed} value={props.name} />
        ) : null}
      </div>
    </div>
  );
};

export default Person;
