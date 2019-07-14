import React, { Component } from 'react'
import Person from './Person'


class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps')
    //     return state
    // }

    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillReceiveProps', props)
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate')
        // return true
        return nextProps.persons !== this.props.persons ? true : false
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return {message: 'Snapshot'};
    }

    // componentWillUpdate() {
    //     console.log('[Persons.js] componentWillUpdate')
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate')
        console.log(snapshot)
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
    }

    render() { 
        console.log('[Persons.js] rederinng...')
        return this.props.persons.map(person => (
            <Person
                key={person.id}
                person={person}
                clicked={this.props.clicked}
                changed={this.props.changed}
            />
        ))
    }
}
 
export default Persons