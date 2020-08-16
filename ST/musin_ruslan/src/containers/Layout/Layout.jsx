import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import MessageField from "../MessageField/MessageField";
import ChatList from "../ChatList/ChatList";
import Header from "../Header/Header";
import { sendMessage } from "../../Actions/messageActions";
import "./style.css";

class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        sendMessage: PropTypes.func.isRequired,
    };

    static defaultProps = {
        chatId: 1,
    };

    state = {
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
        const { messages } = this.state;
        const { chatId } = this.props;

        const messageId = Object.keys(messages). length + 1;
        this.setState({
            messages: {...messages,
                [messageId]: {text: message, author: author}},
        });
        this.props.sendMessage(messageId, message, author, chatId);
    };

    addChat = (title) => {
        const { chats } = this.state;

        const chatId = Object.keys(chats).length + 1;
        this.setState({
            chats: {...chats,
                [chatId]: {title: title, messageList:[]},}
        })
    };

    render() {
        return <div className="main">
                    <Header chatId={ this.props.chatId }/>
                    <div className="content">
                        <ChatList />
                        <MessageField
                            chatId={ this.props.chatId }
                            messages={ this.state.messages }
                            sendMessage={ this.sendMessage }
                        />
                    </div>
            </div>
    }
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);