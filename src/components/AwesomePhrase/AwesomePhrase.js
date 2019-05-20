import React from 'react';
import './AwesomePhrase.css';

const AwesomePhrase = props => {
  let awesomePhrase = '';
  const classes = [];
  if (!props.presence) {
    awesomePhrase = 'Nobody is here, it seems :/';
  }
  if (props.presence && props.length === 2) {
    awesomePhrase = 'All aboard :D';
  }
  if (props.length === 1) {
    classes.push('bold');
  }
  if (props.length === 0) {
    classes.push('all');
  }
  console.log(props.length);

  return <h2 className={classes}>{props.awesomePhrase || awesomePhrase}</h2>;
};

export default AwesomePhrase;
