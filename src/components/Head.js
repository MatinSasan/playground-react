import React from 'react';
import CallMe from './CallMe';
import '../container/App.css';

const Head = props => {
  return (
    <div>
      <button
        disabled={props.disabled}
        className="btn call"
        onClick={props.onClick}>
        call me
      </button>

      <CallMe changed={props.changed} name={props.name} mobin={props.mobin} />
    </div>
  );
};

export default Head;
