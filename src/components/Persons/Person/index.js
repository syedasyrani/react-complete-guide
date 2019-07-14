import React, { Component } from 'react'
import classes from './Person.css'

import ErrorBoundary from '../../ErrorBoundary'
import Validation from '../../Validation'

class Person extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.person !== this.props.person ? true : false
    }

    render() { 
        console.log('[Person.js] rendering....')
        return (
            <ErrorBoundary>
            <div className={classes.Person}>
                <button onClick={() => this.props.clicked(this.props.person.id)}>Remove</button>
                <p>I am {this.props.person.name} and I am {this.props.person.age}'s years old</p>
                <p>{this.props.children}</p>
                <span>name:</span>
                <input 
                    type="text" 
                    onChange={e => this.props.changed(this.props.person, e)} 
                    value={this.props.person.name || ''} />
                <Validation inputLength={this.props.person.name.length} />
            </div>
            </ErrorBoundary>

        ) 
    }
}
 
export default Person