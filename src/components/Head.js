import React from 'react';
import CallMe from './CallMe';
import '../container/App.css';
import Aucs from '../hoc/Aucs';

const Head = props => {
  return (
    <Aucs>
      <button
        disabled={props.disabled}
        className="btn call"
        onClick={props.onClick}>
        call me
      </button>

      <CallMe changed={props.changed} name={props.name} mobin={props.mobin} />
    </Aucs>
  );
};

export default Head;
