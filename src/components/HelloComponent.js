import React from 'react';
import Person from './Person/Person';
import LengthMother from './Length/LengthMother';

const HelloComponent = props => {
  return (
    <React.Fragment>
      <LengthMother />
      <Person changed={props.changed} name={props.name} mobin={props.mobin}>
        Hello there {':)'}
      </Person>
    </React.Fragment>
  );
};

export default HelloComponent;
