import React from 'react';
import './AwesomePhrase.css';

const AwesomePhrase = props => {
  let awesomePhrase = '';
  const classes = [];

  if (props.length === 1) {
    classes.push('bold');
  }
  if (props.length === 0) {
    classes.push('all');
  }

  if (props.length === 0) {
    awesomePhrase = 'where did they all go?';
  }

  if (props.persons.some(p => p.name !== 'Mobin')) {
    awesomePhrase = 'Where is Mobin?';
  }
  if (props.persons.some(p => p.name !== 'Matin')) {
    awesomePhrase = 'Where is Matin?';
  }

  if (props.presence && props.length === 2) {
    awesomePhrase = 'All aboard :D';
  }

  if (!props.presence) {
    awesomePhrase = 'Nobody is here, it seems :/';
  }

  console.log(props.length);

  return <h2 className={classes}>{awesomePhrase}</h2>;
};

export default AwesomePhrase;
