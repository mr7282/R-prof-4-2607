import React from "react";
import PropTypes from "prop-types";
import MessageField from "../MessageField/MessageField"
import ChatList from "../ChatList/ChatList"
import Header from "../Header/Header"
import "./style.css"

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    };

    static defaultProps = {
        chatId: 1,
    };

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

    componentDidUpdate(prevProps, prevState) {
        const {messages} = this.state;
        if (Object.keys(prevState.messages).length < Object.keys(messages).length && Object.values(messages)[Object.values(messages).length - 1].author === "'mr7282'") {
            setTimeout(() =>
            this.sendMessage("Don't touch me! I'm robot", "'robot'"), 1000);

        }
    };

    sendMessage = (message, author) => {
        const { messages, chats } = this.state;
        const { chatId } = this.props;

        const messageId = Object.keys(messages). length + 1;
        this.setState({
            messages: {...messages,
                [messageId]: {text: message, author: author}},
            chats: {...chats,
            [chatId]: { ...chats[chatId],
                            messageList: [...chats[chatId]["messageList"], messageId]}},
        })
    };

    render() {
        return <div className="main">
                    <Header chatId={ this.props.chatId } chat="Chat "/>
                    <div className="content">
                        <ChatList chats={ this.state.chats }/>
                        <MessageField
                        chatId={ this.props.chatId }
                        chats={ this.state.chats }
                        messages={ this.state.messages }
                        sendMessage={ this.sendMessage } />
                    </div>
            </div>
    }
}