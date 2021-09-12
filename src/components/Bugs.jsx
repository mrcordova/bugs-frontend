import React, { Component } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadBugs } from '../store/bugs';

const Bugs = (props) => {


useEffect(() => {
    props.loadBugs();
}, []);

    return ( <ul>
        {props.bugs.map(bug => (
            <li key={bug.id}>{bug.description}</li>
        ))}
    </ul> );
}
 
const mapStateToProps = state => ({
    bugs: state.entities.bugs.list
});

const mapDispatchToProps = dispatch => ({
    loadBugs: () => dispatch(loadBugs())
});
export default connect(mapStateToProps, mapDispatchToProps)(Bugs);

