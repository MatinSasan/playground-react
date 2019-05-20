import React, { Component } from 'react';

import Persons from '../components/Persons';
import ErrorBoundary from '../ErrorBoundary/errorBoundary';
import CallMe from '../components/CallMe';

import './App.css';

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
          <br />
          <button
            disabled={this.state.persons.length === 0}
            className="btn call"
            onClick={this.nameHandler.bind(this, 'Mat')}>
            call me
          </button>
          <br />

          <CallMe
            changed={this.inputHandler}
            name={this.state.VIP.name}
            mobin={this.state.mobin}
          />

          <Persons persons={this.state.persons} click={this.deleteHandler} />
        </div>
      );
      btn.backgroundColor = 'red';
      btn.color = 'white';
    }

    //
    let awesomePhrase = '';
    const classes = [];
    if (!this.state.showPersons) {
      awesomePhrase = 'Nobody is here, it seems :/';
    }
    if (this.state.showPersons && this.state.persons.length === 2) {
      awesomePhrase = 'All aboard :D';
    }
    if (this.state.persons.length === 1) {
      classes.push('bold');
    }
    if (this.state.persons.length === 0) {
      classes.push('all');
    }
    console.log(this.state.persons.length);

    // Final render
    return (
      <div className="App">
        <button style={btn} onClick={() => this.switchHandler()}>
          Toggle
        </button>
        <h2 className={classes}>{this.state.awesomePhrase || awesomePhrase}</h2>
        {persons}
      </div>
    );
  }
}

export default App;
