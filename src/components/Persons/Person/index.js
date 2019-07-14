import React from 'react';
import classes from './Person.css'

import './Person.css'

const person = (props) => {
    console.log('[Person.js] rederinng...')
    return (
        <div className={classes.Person}>
            <button onClick={props.clicked}>Remove</button>
            <p>I am {props.name} and I am {props.age}'s years old</p>
            <p>{props.children}</p>
            <span>name:</span>
            <input 
                type="text" 
                onChange={props.changed} 
                value={props.name || ''} />
        </div>
    )
}

export default person