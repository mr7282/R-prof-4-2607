import React from "react";
import MessageField from "../MessageField/MessageField"
import ChatList from "../ChatList/ChatList"
import Header from "../Header/Header"
import "./style.css"

export default class Layout extends React.Component {
    render() {
        return <div className="main">
                    <Header/>
                    <div className="content">
                    <ChatList/>
                    <MessageField />
                    </div>
            </div>
    }
}