import React from 'react';
import './style.css';
import Proptypes from 'prop-types';

export default class Message extends React.Component
{
    static propTypes = {
        text: Proptypes.string.isRequired,
        sender: Proptypes.string.isRequired,
    };

    render()
    {
        return (
            <div
                className='message'
                style={
                    { alignSelf: this.props.sender === 'bot' ? 'flex-start' : 'flex-end' }
                }
            >
                <div>{ this.props.text }</div>
                <div className='message-sender'>{ this.props.sender }</div>
            </div>
        )
    }
}