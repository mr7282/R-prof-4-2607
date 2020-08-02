import React from 'react';
import PropTypes from 'prop-types';

export default class Child extends React.Component {
    static propTypes = {
        counter: PropTypes.number.isRequired,
    };

    componentWillMount() {
        console.log('Child componentWillMount');
    }
    componentDidMount() {
        console.log('Child componentDidMount');
    }
    componentDidUpdate() {
        console.log('Child componentDidUpdate');
    }

    render() {
        console.log('Childl render');
        return (
            <h1>Child component, counter: { this.props.counter}</h1>
        );
    }
}
