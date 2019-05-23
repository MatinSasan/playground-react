import React, { useContext } from 'react';
import './AwesomePhrase.css';
import { PhraseContext } from '../../container/App';

const AwesomePhrase = () => {
  const { per, show, length } = useContext(PhraseContext);

  let awesomePhrase = '';
  const classes = [];

  if (length === 1) {
    classes.push('bold');
  }
  if (length === 0) {
    classes.push('all');
  }

  if (length === 0) {
    awesomePhrase = 'where did they all go?';
  }

  if (per.some(p => p.name !== 'Mobin')) {
    awesomePhrase = 'Where is Mobin?';
  }
  if (per.some(p => p.name !== 'Matin')) {
    awesomePhrase = 'Where is Matin?';
  }

  if (show && length === 2) {
    awesomePhrase = 'All aboard :D';
  }

  if (!show) {
    awesomePhrase = 'Nobody is here, it seems :/';
  }

  console.log(length);

  return <h2 className={classes}>{awesomePhrase}</h2>;
};

export default AwesomePhrase;
