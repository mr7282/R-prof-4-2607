import React, { Component } from 'react'

export default class Chat extends Component {
    state = {
        input: '',
        messages: []
    }

    handleSendMessage = () => {
        this.setState(state => ({
            ...state,
            messages: [...this.state.messages, 'Привет' ]
        }))
    }
    
    render() {
        const Messages = this.state.messages.map((item, index) => <h3 key={index}>{item}</h3>)
        return(
            <section>
                { Messages }
                <button onClick={this.handleSendMessage}>Жмак</button>
            </section>
        )
    }
}