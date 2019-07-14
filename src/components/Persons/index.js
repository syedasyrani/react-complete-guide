import React from 'react';
import Person from './Person'
import ErrorBoundary from '../ErrorBoundary'
import Validation from '../Validation'

const persons = props => props.persons.map((person, index) => (
        <ErrorBoundary key={index}>
            <Person
                name={person.name} 
                age={person.age} 
                change={e => props.changed(person, e)}
                click={() => props.clicked(index)}
            />

            <Validation inputLength={person.name.length} />
        </ErrorBoundary>
    )
) 

export default persons