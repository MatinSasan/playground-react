import React, { Component } from 'react';

import Person from './components/Person/Person';

import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: null, name: 'Matin', age: 27 },
      { id: null, name: 'Mobin', age: 26 }
    ],
    VIP: { name: 'React' },
    showPersons: false,
    mobin: true
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

  deleteHandler = index => {
    const persons = [...this.state.persons].filter(
      person => person.id !== index
    );
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
      border: '1px solid #eee',
      cursor: 'pointer',
      backgroundColor: 'green',
      color: 'white'
    };

    // toggle
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <button style={btn} onClick={this.nameHandler.bind(this, 'Mat')}>
            call me
          </button>
          <Person
            changed={this.inputHandler}
            name={this.state.VIP.name}
            mobin={this.state.mobin}>
            Hello there {':)'}
          </Person>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={(person.id = index)}
                name={person.name}
                age={person.age}
                click={() => this.deleteHandler(index)}
              />
            );
          })}
        </div>
      );
    }

    // Final render
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
