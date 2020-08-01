import React from 'react';
import Proptypes from 'prop-types';

export default class Message extends React.Component
{
    static propTypes = {
        text: Proptypes.string.isRequired,
    };

    render()
    {
        return <div>{ this.props.text }</div>
    }
}