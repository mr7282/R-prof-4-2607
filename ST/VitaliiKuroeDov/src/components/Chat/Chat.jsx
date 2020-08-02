import React, { Component } from 'react'
import Message from '../Message/Message'
import { Paper, Button, IconButton, TextField } from '@material-ui/core' 
import SendIcon  from '@material-ui/icons/SendRounded'
export default class Chat extends Component {
    state = {
        input: '',
        messages: []
    }

    handleSendMessage = (value) => {
        
        this.setState(state => ({
            ...state,
            messages: [...this.state.messages, {name: 'я', text: value} ]
        }))
        this.setState({input: ''})
    }

    handleClick = (value) => {
        if (this.state.input !== '') {
            this.handleSendMessage(value)
        }
    }

    handleKeyUp = (event) => {
        if (this.state.input !== '') {
            if (event.keyCode === 13){
                this.handleSendMessage(this.state.input)
            }    
        }
    }

    handleChange = (event) => {
        this.setState({input: event.target.value})
    }

    componentDidUpdate(prevProps, prevState) {
        const currentMessage = this.state.messages
        const lastMessage = currentMessage[currentMessage.length -1]

        if(prevState.messages.length < this.state.messages.length && lastMessage.name === 'я'){
            setTimeout(() => {
                this.setState(state => ({
                    ...state,
                    messages: [...this.state.messages, {name: 'Бот', text: `Бот компот`} ]
                }))
            }, 1000)      
        }
    }

    render() {
        const Messages = this.state.messages.map((item, index) => <Message key={index} message={item}/>)
        return(
            <section className="chat container">
                <div className="message-list">
                    { Messages }
                </div>
                <div className="chat-footer">
                    <TextField 
                        autoFocus
                        fullWidth
                        size="small"
                        label="введи текст"
                        variant="outlined"
                        value={this.state.input} 
                        onChange={this.handleChange} 
                        onKeyUp={(event) => this.handleKeyUp(event, this.state.input)}/>

                    <IconButton
                        color="primary" 
                        onClick={() => this.handleClick(this.state.input)}>
                            <SendIcon/>
                    </IconButton>
                </div>
            </section>
        )
    }
}