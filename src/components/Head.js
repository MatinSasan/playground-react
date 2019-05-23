import React from 'react';
import HelloComponent from './HelloComponent';
import '../container/App.module.css';
import Aucs from '../hoc/Aucs';

const Head = props => {
  return (
    <Aucs>
      <button
        disabled={props.disabled}
        className="btn call"
        onClick={props.onClick}>
        Call me
      </button>

      <HelloComponent
        changed={props.changed}
        name={props.name}
        mobin={props.mobin}
      />
    </Aucs>
  );
};

export default Head;
