import React from "react";
import PropTypes from "prop-types";
import { TextField, FloatingActionButton } from "material-ui"
import SendIcon from "material-ui/svg-icons/content/send"
import Message from "../Message/Message";
import "./style.css"


export default class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
    }

    state = {
        chats: {
            1: {title: "Chat 1", messageList: [1]},
            2: {title: "Chat 2", messageList: [2]},
            3: {title: "Chat 3", messageList: [1]},
            4: {title: "Chat 4", messageList: [2]},
            5: {title: "Chat 5", messageList: [1]},
        },
        messages: {
           1: { text: " Hello!", author: "'robot'"},
           2: { text: " How are you?", author: "'robot'"},
        },
        input: "",
    };

    // handleClick = (message) => {
    //     this.sendMessage(message);
    // };

    handleChange = (event) => {
        this.setState({  [event.target.name] : event.target.value });
    };

    handleKeyUP = (event) => {
        if (event.keyCode === 13) {
            this.handleSendMessage(this.state.input, "'mr7282'")
        }
    };

    // sendMessage = (message) => {
    //     this.setState({messages: [ ...this.state.messages, {author: "'mr7282'", text: message}], input: "",
    //     });
    // };

    componentDidUpdate(prevProps, prevState) {
        const {messages} = this.state;
        if (Object.keys(prevState.messages).length < Object.keys(messages).length && Object.values(messages)[Object.values(messages).length - 1].author === "'mr7282'") {
            setTimeout(() =>
            this.handleSendMessage("Don't touch me! I'm robot", "'robot'"), 1000);

        }
    };

    handleSendMessage = (message, author) => {
        const { messages, chats, input } = this.state;
        const { chatId } = this.props;

        if (input.length > 0 || author === "'robot'") {
            const messageId = Object.keys(messages).length + 1;
            this.setState({
                messages: {...messages,
                    [messageId]: {text: message, author: author}},
                chats: {...chats,
                [chatId]: { ...chats[chatId],
                                messageList: [...chats[chatId]["messageList"], messageId]}},
            })
        }
        if (author === "'mr7282'") {
            this.state({input: ""})
        }
    };

    render() {
        const { messages, chats } = this.state;
        const { chatId } = this.props;

        const messageElements = chats[chatId].messageList.map((messageId, index) => (
            <Message
                key={ index }
                text={ messages[messageId].text }
                author={ messages[messageId].author}
            />));

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
                            onKeyUp={ this.handleKeyUP }
                        />
                        <FloatingActionButton onClick={ () => this.handleSendMessage(this.state.input, "'mr7282'") }>
                            <SendIcon />
                        </FloatingActionButton>
                    </div>

                </div>
    }
}