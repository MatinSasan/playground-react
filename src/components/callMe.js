import React from 'react';
import Person from './Person/Person';

const CallMe = props => {
  return (
    <Person changed={props.changed} name={props.name} mobin={props.mobin}>
      Hello there {':)'}
    </Person>
  );
};

export default CallMe;
