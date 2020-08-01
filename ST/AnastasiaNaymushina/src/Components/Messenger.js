import React, {Component} from 'react';
import MessageComponent from "./MessageComponent";
import AddMessage from "./AddMessage";


export default class Messenger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            newMessage: "",
            user: "currentUser"
        };
        this.onSubmitNewMessage = this.onSubmitNewMessage.bind(this);
        this.onChangeNewMessage = this.onChangeNewMessage.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        let msgBefore = [...prevState.messages];
        let msgAfter = [...this.state.messages];
    
        if(msgAfter.length > 0 && msgBefore.length < msgAfter.length && msgAfter.pop().user !== "bot"){
            
               setTimeout(() =>
                   this.setState({
                       messages: [ 
                       ...this.state.messages, 
                       {text: 'Не приставай ко мне, я робот!', user: 'bot'} 
                       ] 
                   }),
               500);
           
        }
               
   }


    onSubmitNewMessage() {
            this.setState({
            messages: [...this.state.messages , { user: this.state.user, text: this.state.newMessage}],
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
            return <MessageComponent text={message.text} key={message.text} user={message.user}/>
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
