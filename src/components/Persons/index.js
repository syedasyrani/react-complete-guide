import React from 'react';
import Person from './Person'
import ErrorBoundary from '../ErrorBoundary'
import Validation from '../Validation'

const persons = props => {
    console.log('[Persons.js] rederinng...')
    
    return (
        props.persons.map((person, index) => (
            <ErrorBoundary key={index}>
                <Person
                    name={person.name} 
                    age={person.age} 
                    clicked={() => props.clicked(index)}
                    changed={e => props.changed(person, e)}
                />

                <Validation inputLength={person.name.length} />
            </ErrorBoundary>
        ))
    ) 
}

export default persons