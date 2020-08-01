import React from 'react';

export default class Child extends React.Component {
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
            <h1>Child component</h1>
        );
    }
}
