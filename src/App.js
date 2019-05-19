import React, { Component } from 'react';

import Person from './components/Person/Person';

import './App.css';

class App extends Component {
  state = {
    persons: [{ name: 'Matin', age: 27 }, { name: 'Mobin', age: 26 }],
    VIP: { name: 'React' },
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
      VIP: { name: event.target.value, age: 'immortal' }
    });
  };

  deleteHandler = index => {
    const persons = this.state.persons;
    let updatedPersons = persons.filter(person => person.key !== index);
    this.setState({ persons: updatedPersons });
  };

  switchHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
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
          <Person
            changed={this.inputHandler}
            name={this.state.VIP.name}
            mobin={this.state.mobin}>
            Hello there {':)'}
          </Person>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={index}
                name={person.name}
                age={person.age}
                click={() => this.deleteHandler(index)}
              />
            );
          })}
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
