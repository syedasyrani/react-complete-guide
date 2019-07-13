import React, { Component } from 'react';

import './App.css';
import Validation from './components/Validation'
import Person from './components/Person'


class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Ahmad', age: 18 },
      { id: 2, name: 'Mok', age: 27 },
      { id: 3, name: 'Amar', age: 23 },
      { id: 4, name: 'Keith', age: 25 },
      { id: 5, name: 'Scott', age: 27 },
      { id: 6, name: 'Mahi', age: 21  },
    ],
    showPersons: true
  }

  attributeChangeHandler = (personObj, event) => {
    const updatedState = [];
    
    this.state.persons.map((person, index) => {
      person.name = personObj.id === person.id ? event.target.value : person.name

      return updatedState.push(person)
    }) 

    this.setState({ person: updatedState })
  }

  togglePersonsHandler = () => this.setState({ showPersons: !this.state.showPersons })

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    // remove one element from the array
    persons.splice(personIndex, 1)
    this.setState({persons})
  }

  render() {
    const style = {
      backgroundColor: 'red',
      color: 'white',
      font: 'inherit',
      border: '1px solid #aaa',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          { 
            this.state.persons.map((person, index) => {
              return (
                <div key={index}>
                  <Person
                    name={person.name} 
                    age={person.age} 
                    change={e => this.attributeChangeHandler(person, e)}
                    click={() => this.deletePersonHandler(index)}
                  />

                  <Validation inputLength={person.name.length} />
                </div>
              )
            }) 
          }
        </div> 
      );
    }

    let classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <p className={classes.join(' ')}>Hello World</p>
        <button style={style} onClick={this.togglePersonsHandler}>Click Me</button>
        {persons}
      </div>
    );
  }
}

export default App

/**
 * Up to chapter 5-8: using Radium package for @media querries and :hover atributes
 */

// import React, { Component } from 'react';
// import Radium , { StyleRoot } from 'radium'

// import './App.css';
// import Validation from './components/Validation'
// import Person from './components/Person'


// class App extends Component {
//   state = {
//     persons: [
//       { id: 1, name: 'Ahmad', age: 18 },
//       { id: 2, name: 'Mok', age: 27 },
//       { id: 3, name: 'Amar', age: 23 },
//       { id: 4, name: 'Keith', age: 25 },
//       { id: 5, name: 'Scott', age: 27 },
//       { id: 6, name: 'Mahi', age: 21  },
//     ],
//     showPersons: true
//   }

//   attributeChangeHandler = (personObj, event) => {
//     const updatedState = [];
    
//     this.state.persons.map((person, index) => {
//       person.name = personObj.id === person.id ? event.target.value : person.name

//       return updatedState.push(person)
//     }) 

//     this.setState({ person: updatedState })
//   }

//   togglePersonsHandler = () => this.setState({ showPersons: !this.state.showPersons })

//   deletePersonHandler = (personIndex) => {
//     const persons = [...this.state.persons]
//     // remove one element from the array
//     persons.splice(personIndex, 1)
//     this.setState({persons})
//   }

//   render() {
//     const style = {
//       backgroundColor: 'red',
//       color: 'white',
//       font: 'inherit',
//       border: '1px solid #aaa',
//       padding: '8px',
//       cursor: 'pointer',
//       ':hover': {
//         backgroundColor: 'lightgreen',
//         color: 'black'
//       }
//     }

//     let persons = null;

//     if (this.state.showPersons) {
//       persons = (
//         <div>
//           { 
//             this.state.persons.map((person, index) => {
//               return (
//                 <div key={index}>
//                   <Person
//                     name={person.name} 
//                     age={person.age} 
//                     change={e => this.attributeChangeHandler(person, e)}
//                     click={() => this.deletePersonHandler(index)}
//                   />

//                   <Validation inputLength={person.name.length} />
//                 </div>
//               )
//             }) 
//           }
//         </div> 
//       );

//       style.backgroundColor = 'green'
//       style[':hover'] = {
//         backgroundColor: 'salmon',
//         color: 'white'
//       }
//     }

//     let classes = []
//     if (this.state.persons.length <= 2) {
//       classes.push('red')
//     }

//     if (this.state.persons.length <= 1) {
//       classes.push('bold');
//     }

//     return (
//       <StyleRoot>
//         <div className="App">
//           <p className={classes.join(' ')}>Hello World</p>
//           <button style={style} onClick={this.togglePersonsHandler}>Click Me</button>
//           {persons}
//         </div>
//       </StyleRoot>
//     );
//   }
// }

// export default Radium(App)


/**
 * React Hooks
 */

// import React, { useState } from 'react';
// import './App.css';

// import Person from './components/Person'

// const app = props => {
//   const [ personsState, setPersonState ] = useState({
//     persons: [
//       { id: 1, name: 'Ahmad', age: 18 },
//       { id: 2, name: 'Mok', age: 27 },
//       { id: 3, name: 'Amar', age: 23 },
//     ],
//   })

//   const [ numState, setNumState ] = useState({
//     num: 1
//   })

//   console.log(personsState, numState.num);

//   const switchNameHandler = () => setPersonState({
//     persons: [
//       {id: 1, name: 'Scott', age: 23},
//       {id: 2, name: 'Keith', age: 26},
//       {id: 3, name: 'Ivan', age: 45},
//     ]
//   })

//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <button onClick={switchNameHandler} style={{border: '1px black'}}>
//         Switch Name {personsState.num}
//       </button>
//       { personsState.persons.map(person => <Person key={person.id} name={person.name} age={person.age} />) }
//     </div>
//   );
// }

// export default app;
