import React from "react";
import Header from "./Header.jsx";
import ChatList from "./ChatList.jsx";
import MessageField from "./MessageField.jsx";
import "../styles/styles.css";

export default class Layout extends React.Component {
    render() {
        return (
            <div className="layout">
                <Header className="header"/>
                <ChatList className="chat-list"/>
                <MessageField className="chat"/>
            </div>
        );
    }
}
