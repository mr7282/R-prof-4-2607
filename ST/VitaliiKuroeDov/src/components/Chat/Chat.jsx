import React, { Component } from 'react'

export default class Chat extends Component {
    state = {
        input: '',
        messages: []
    }

    handleSendMessage = () => {
        this.setState(state => ({
            ...state,
            messages: [...this.state.messages, this.state.input ]
        }))
        this.setState({input: ''})
    }

    handleKeyUp = (event) => {
        if (event.keyCode === 13){
            this.handleSendMessage()
        }
    }

    handleChange = (event) => {
        this.setState({input: event.target.value})
    }

    render() {
        const Messages = this.state.messages.map((item, index) => <h3 key={index}>{item}</h3>)
        return(
            <section>
                { Messages }
                <input 
                    type="text" 
                    autoFocus
                    name="" 
                    placeholder="введи текст"
                    id="" 
                    value={this.state.input} 
                    onChange={this.handleChange} 
                    onKeyUp={(event) => this.handleKeyUp(event, this.state.input)}/>

                <button onClick={this.handleSendMessage}>Йа кнопкен</button>
            </section>
        )
    }
}