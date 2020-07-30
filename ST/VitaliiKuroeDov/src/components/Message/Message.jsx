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
        return(
            <div>
                <span>{this.props.message.name} : {this.props.message.text}</span>
            </div>
        )
    }
}

