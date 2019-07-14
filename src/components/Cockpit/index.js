import React from 'react'
import classes from './Cockpit.css';

const cockpit = props => {
    const assignedClasses = []
    let btnClass = ''

    if (props.showPersons) {
      btnClass = classes.red
    }
    
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red)
    }

    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.Cockpit}>
        <p className={assignedClasses.join(' ')}>Hello World</p>
        <button 
          className={btnClass} 
          onClick={props.clicked}>Click Me</button>
      </div>
    )
}

export default cockpit