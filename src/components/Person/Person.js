import React from 'react';
import './Person.css';

const Person = props => {
  return (
    <div className="Person">
      <h3>
        This is {props.name} {props.age}
      </h3>
      <div>{props.children}</div>
      {props.mobin ? (
        <input type="text" onChange={props.changed} value={props.name} />
      ) : null}
    </div>
  );
};

export default Person;
