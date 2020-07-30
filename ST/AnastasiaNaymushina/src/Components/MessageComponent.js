import React, {Component} from 'react';


export default class MessageComponent extends Component{
    render() {
        return (
            <div className="message">{this.props.user} : {this.props.text}</div>
        );
    }
}
