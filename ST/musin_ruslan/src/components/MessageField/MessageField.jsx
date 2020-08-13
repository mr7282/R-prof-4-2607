import React from "react";
import { TextField, FloatingActionButton } from "material-ui"
import SendIcon from "material-ui/svg-icons/content/send"
import Message from "../Message/Message";
import "./style.css"


export default class MessageField extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }
    state = {
        messages: [
            {author: "'mr7282'", text: " Hello!"},
            {author: "'mr7282'", text: " How are you?"},
            ],
        input: "",
    };

    handleClick = (message) => {
        this.sendMessage(message);
    };

    handleChange = (event) => {
        this.setState({input: event.target.value});
    };

    handleKeyUP = (event, message) => {
        if (event.keyCode === 13) {
            this.sendMessage(message)
        }
    };

    sendMessage = (message) => {
        this.setState({messages: [ ...this.state.messages, {author: "'mr7282'", text: message}], input: "",
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.messages.length < this.state.messages.length && this.state.messages[this.state.messages.length - 1].author === "'mr7282'") {
            setTimeout(() => this.setState(
                {messages: [ ...this.state.messages, {author: "'robot'",  text: "Don't touch me " +  this.state.messages[this.state.messages.length-1].author + "! I am robot!"}]}
            ), 1000);

        }
    };

    render() {
        const messageElements = this.state.messages.map((text) => (
            <Message text={ text.text } author={ text.author } />
        ));

        return <div>
                    <div id="name" className="message-field">
                        { messageElements }
                    </div>
                    <div style={ { width: '100%', display: 'flex' } }>
                        <TextField
                            name="input"
                            fullWidth={ true }
                            hintText="Введите сообщение"
                            style={ { fontSize: '22px' } }
                            onChange={ this.handleChange }
                            value={ this.state.input }
                            onKeyUp={ (event) => this.handleKeyUP(event, this.state.input) }
                        />
                        <FloatingActionButton onClick={ () => this.handleClick(this.state.input) }>
                            <SendIcon />
                        </FloatingActionButton>
                    </div>

                </div>
    }
}