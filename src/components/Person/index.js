import React from 'react';

import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <button onClick={props.click}>Remove</button>
            <p>I am {props.name} and I am {props.age}'s years old</p>
            <p>{props.children}</p>
            <span>name:</span> <input type="text" onChange={props.change} value={props.name || ''} />
        </div>
    )
}

export default person