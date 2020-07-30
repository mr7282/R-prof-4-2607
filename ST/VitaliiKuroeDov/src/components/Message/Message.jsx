import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Message extends Component {

    static propTypes = {
        message: PropTypes.shape({
            text: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    }
 
    render() {
        const message = this.props.message.name === 'я' ? 
            <span className="message">{this.props.message.name} : {this.props.message.text}</span> :
            <span className="message bot">{this.props.message.name} : {this.props.message.text}</span>
        return(
            <div>
                { message }
            </div>
        )
    }
}

