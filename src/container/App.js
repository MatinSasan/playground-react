import React, { Component } from 'react';

import Persons from '../components/Persons';
import Head from '../components/Head';
import AwesomePhrase from '../components/AwesomePhrase/AwesomePhrase';

import './App.css';

const LengthContext = React.createContext({});
export const LengthProvider = LengthContext.Provider;
export const LengthConsumer = LengthContext.Consumer;

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Matin', age: 27 },
      { id: 2, name: 'Mobin', age: 26 }
    ],
    VIP: { name: 'React' },
    showPersons: false,
    mobin: true,
    awesomePhrase: ''
  };

  nameHandler = newName => {
    const person = { ...this.state.persons[0] };
    const persons = [...this.state.persons];

    if (this.state.persons[0].name === newName) {
      person.name = 'Matin';
    } else {
      person.name = newName;
    }
    persons[0] = person;
    this.setState({ persons });
  };

  inputHandler = event => {
    this.setState({
      VIP: { name: event.target.value, age: 'immortal' }
    });
  };

  deleteHandler = id => {
    const persons = [...this.state.persons].filter(person => person.id !== id);

    if (persons.length === 0) {
      this.setState({ awesomePhrase: 'where did they all go?' });
    }

    if (persons.some(p => p.name !== 'Mobin')) {
      this.setState({ awesomePhrase: 'Where is Mobin?' });
    }
    if (persons.some(p => p.name !== 'Matin')) {
      this.setState({ awesomePhrase: 'Where is Matin?' });
    }

    this.setState({ persons });
  };

  switchHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
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
    if (this.state.showPersons) {
      persons = (
        <div className="person">
          <LengthProvider value={this.state.persons.length}>
            <Head
              disabled={this.state.persons.length === 0}
              onClick={this.nameHandler.bind(this, 'Mat')}
              changed={this.inputHandler}
              name={this.state.VIP.name}
              mobin={this.state.mobin}
            />
          </LengthProvider>
          <Persons persons={this.state.persons} click={this.deleteHandler} />
        </div>
      );
      btn.backgroundColor = 'red';
      btn.color = 'white';
    }

    // Final render
    return (
      <div className="App">
        <button style={btn} onClick={() => this.switchHandler()}>
          Toggle
        </button>
        <AwesomePhrase
          presence={this.state.showPersons}
          length={this.state.persons.length}
          awesomePhrase={this.state.awesomePhrase}
        />
        {persons}
      </div>
    );
  }
}

export default App;
