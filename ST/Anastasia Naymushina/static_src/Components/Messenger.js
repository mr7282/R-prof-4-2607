import React, {Component} from 'react';
import MessageComponent from "./MessageComponent";
import AddMessage from "./AddMessage";


export default class Messenger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: ['Привет', 'Как дела?'],
            newMessage: ""
        };
        this.onSubmitNewMessage = this.onSubmitNewMessage.bind(this);
        this.onChangeNewMessage = this.onChangeNewMessage.bind(this);
    }

    onSubmitNewMessage() {
        let currentMsgs = this.state.messages;
        currentMsgs.push(this.state.newMessage);
        this.setState({
            messages: currentMsgs,
            newMessage: ""
        });


    }

    onChangeNewMessage(newMessage){
        this.setState({
            newMessage: newMessage
        })
    }


    render() {

        let messageField = this.state.messages.map((message) => {
            return <MessageComponent text={message} key={message}/>
        });
        return (
            <div className="messager">
                {messageField}
                <AddMessage
                    newMessage={this.state.newMessage}
                    onChange={this.onChangeNewMessage}
                    onSubmit={this.onSubmitNewMessage}
                />
            </div>

        );
    }
}
