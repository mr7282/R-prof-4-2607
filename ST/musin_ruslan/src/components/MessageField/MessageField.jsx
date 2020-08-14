import React from "react";
import PropTypes from "prop-types";
import { TextField, FloatingActionButton } from "material-ui"
import SendIcon from "material-ui/svg-icons/content/send"
import Message from "../Message/Message";
import "./style.css"


export default class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
        messages: PropTypes.object.isRequired,
        chats: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
    };

    state = {
        input: '',
    };


    handleChange = (event) => {
        this.setState({  [event.target.name] : event.target.value });
    };

    handleKeyUP = (event) => {
        if (event.keyCode === 13) {
            this.handleSendMessage(this.state.input, "'mr7282'")
        }
    };


    handleSendMessage = (message, author) => {
        if (this.state.input.length > 0 || author === "'robot'") {
            this.props.sendMessage(message, author);
        }

        if (author === "'mr7282'") {
            this.setState({input: ""})
        }
    };

    render() {
        const { chatId, messages, chats } = this.props;

        const messageElements = chats[chatId].messageList.map( messageId => (
            <Message
                key={ messageId }
                text={ messages[messageId].text }
                author={ messages[messageId].author}
            />));

        return <div>
                    <div key="messageElements" id="name" className="message-field">
                        { messageElements }
                    </div>
                    <div key='textInput' style={ { width: '100%', display: 'flex' }} >
                        <TextField
                            name="input"
                            fullWidth={ true }
                            hintText="Введите сообщение"
                            style={ { fontSize: '22px' } }
                            onChange={ this.handleChange }
                            value={ this.state.input }
                            onKeyUp={ this.handleKeyUP }
                        />
                        <FloatingActionButton onClick={ () => this.handleSendMessage(this.state.input, "'mr7282'") }>
                            <SendIcon />
                        </FloatingActionButton>
                    </div>

                </div>
    }
}