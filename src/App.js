import React from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

class App extends React.Component {
  state = {
    persons: [
      { id: 'rtqhys', name: 'Chuks', age: '35' },
      { id: 'r3a4ys', name: 'Uche', age: '30' },
      { id: 'rtutys', name: 'Ify', age: '34' },
      { id: 'rthedf', name: 'Chizo', age: '33' }
    ],
    otherState: 'Some other value',
    showPerson: false
  };

  // switchNameHandler = newName => {
  //   //console.log('Was clicked!');
  //   this.setState({
  //     persons: [
  //       { name: newName, age: '40' },
  //       { name: 'Uche', age: '31' },
  //       { name: 'Ify', age: '34' },
  //       { name: 'Chizo', age: '33' }
  //     ]
  //   });
  // };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // const person = this.state.persons[personIndex]; // mutates the person object
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); //classes = ['red','bold']
    }

    return (
      <StyleRoot>
        <div className='App'>
          <h1>Hi, I am a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button style={style} onClick={this.togglePersonHandler}>
            Toggle Person
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
