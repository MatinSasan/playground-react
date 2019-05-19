import React, { Component } from 'react';

import Person from './components/Person/Person';

import './App.css';

class App extends Component {
  state = {
    persons: [{ name: 'Matin', age: 27 }, { name: 'Mobin', age: 26 }],
    showPersons: false,
    mobin: true
  };

  nameHandler = newName => {
    if (this.state.persons[0].name === newName) {
      this.setState({
        persons: [{ name: 'Matin', age: 27 }, { name: 'Mobin', age: 26 }]
      });
    } else {
      this.setState({
        persons: [{ name: newName, age: 27 }, { name: 'Mobin', age: 26 }]
      });
    }
  };

  inputHandler = event => {
    this.setState({
      persons: [
        { name: 'Matin', age: 27 },
        { name: event.target.value, age: 26 }
      ]
    });
  };

  switchHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const person = this.state.persons;
    let persons = null;
    const btn = {
      padding: '8px',
      border: '1px solid #eee',
      cursor: 'pointer',
      backgroundColor: 'green',
      color: 'white'
    };

    if (this.state.showPersons) {
      persons = (
        <div>
          <button style={btn} onClick={this.nameHandler.bind(this, 'Mat')}>
            call me
          </button>
          <Person name="React">Hello there {':)'}</Person>
          <Person name={person[0].name} age={person[0].age} />
          <Person
            mobin={this.state.mobin}
            name={person[1].name}
            age={person[1].age}
            changed={this.inputHandler}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <button style={btn} onClick={() => this.switchHandler()}>
          Toggle
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
