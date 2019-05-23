import React, { useState } from 'react';

import Persons from '../components/Persons';
import Head from '../components/Head';
import AwesomePhrase from '../components/AwesomePhrase/AwesomePhrase';

import styles from './App.module.css';

const LengthContext = React.createContext({});
export const LengthProvider = LengthContext.Provider;
export const LengthConsumer = LengthContext.Consumer;

const App = () => {
  const [state, setState] = useState({
    persons: [
      { id: 1, name: 'Matin', age: 27 },
      { id: 2, name: 'Mobin', age: 26 }
    ],
    VIP: { name: 'React' },
    showPersons: false,
    mobin: true,
    awesomePhrase: ''
  });

  const nameHandler = newName => {
    const person = { ...state.persons[0] };
    const persons = [...state.persons];

    if (state.persons[0].name === newName) {
      person.name = 'Matin';
    } else {
      person.name = newName;
    }
    persons[0] = person;
    setState({ ...state, persons });
  };

  const inputHandler = event => {
    setState({
      ...state,
      VIP: { name: event.target.value, age: 'immortal' }
    });
  };

  const deleteHandler = id => {
    const persons = [...state.persons].filter(person => person.id !== id);

    // if (persons.length === 0) {
    //   setState({ ...state, awesomePhrase: 'where did they all go?' });
    // }

    // if (persons.some(p => p.name !== 'Mobin')) {
    //   setState({ ...state, awesomePhrase: 'Where is Mobin?' });
    // }
    // if (persons.some(p => p.name !== 'Matin')) {
    //   setState({ ...state, awesomePhrase: 'Where is Matin?' });
    // }

    setState({ ...state, persons });
  };

  const switchHandler = () => {
    const doesShow = state.showPersons;
    setState({ ...state, showPersons: !doesShow });
  };

  // styling

  const btn = {
    padding: '8px',
    marginTop: '20px',
    width: '100px',
    border: '1px solid #eee',
    cursor: 'pointer',
    backgroundColor: 'green',
    color: 'white'
  };

  // toggle
  let persons = null;

  if (state.showPersons) {
    persons = (
      <div className="person">
        <LengthProvider value={state.persons.length}>
          <Head
            disabled={state.persons.length === 0}
            onClick={nameHandler.bind(this, 'Mat')}
            changed={inputHandler}
            name={state.VIP.name}
            mobin={state.mobin}
          />
        </LengthProvider>
        <Persons persons={state.persons} click={deleteHandler} />
      </div>
    );
    btn.backgroundColor = 'red';
    btn.color = 'white';
  }

  // Final render
  return (
    <div className={styles.App}>
      <button style={btn} onClick={() => switchHandler()}>
        Toggle
      </button>
      <AwesomePhrase
        presence={state.showPersons}
        length={state.persons.length}
        persons={state.persons}
      />
      {persons}
    </div>
  );
};

export default App;
