import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
    static propTypes = {
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }

    render() {
        return <div> <span>{this.props.author}</span>: {this.props.text}</div>
    }
}
