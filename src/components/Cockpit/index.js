import React, { useEffect } from 'react'
import classes from './Cockpit.css'

const cockpit = props => {
  useEffect(() => {
    console.log('[Cockpit.js] 1st useEffect')
    // http request...
    // const timer = setTimeout(() => alert('saved data to cloud!'), 1000);
    
    return () => {
      // clearTimeout(timer)
      console.log('[Cockpit.js] cleanup in 1st useEffect')
    }
  }, [])

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect')

    return () => console.log('[Cockpit.js] cleanup in 2nd useEffect')
  })

  const assignedClasses = []
  let btnClass = ''

  if (props.showPersons) btnClass = classes.Red

  if (props.persons.length <= 2) assignedClasses.push(classes.red)
  if (props.persons.length <= 1) assignedClasses.push(classes.bold)

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