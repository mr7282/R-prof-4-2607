import React, {Component} from 'react';


export default class MessageComponent extends Component{
    render() {
        return (
            <div className="message">{this.props.text}</div>
        );
    }
}
