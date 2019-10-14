import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {
  state = {
    persons: [
      { name: 'Chuks', age: '35' },
      { name: 'Uche', age: '30' },
      { name: 'Ify', age: '34' },
      { name: 'Chizo', age: '33' }
    ],
    otherState: 'Some other value',
    showPerson: false
  };

  switchNameHandler = newName => {
    //console.log('Was clicked!');
    this.setState({
      persons: [
        { name: newName, age: '40' },
        { name: 'Uche', age: '31' },
        { name: 'Ify', age: '34' },
        { name: 'Chizo', age: '33' }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: 'Chuks', age: '40' },
        { name: event.target.value, age: '31' },
        { name: 'Ify', age: '34' },
        { name: 'Chizo', age: '33' }
      ]
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map(p => {
            return <Person name={p.name} age={p.age} />;
          })}
        </div>
      );
    }

    return (
      <div className='App'>
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle Person
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
