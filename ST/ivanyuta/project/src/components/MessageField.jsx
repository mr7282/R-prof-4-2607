import React from "react";
import Message from "./Message.jsx";

export default class MessageField extends React.Component {
    state = {
        messages: [
            {
                author: "Author1",
                text: "Hello!"
            },
            {
                author: "Author1",
                text: "How are you?"
            }
        ]
    };

    handleClick = () => {
        this.setState({
            robotAnswer: true,
            messages: [
                ...this.state.messages,
                { author: "M'r Robot", text: "I'm fine." }
            ]
        });
    };

    componentDidUpdate() {
        if (this.state.robotAnswer) {
            setTimeout(
                () =>
                    this.setState({
                        messages: [
                            ...this.state.messages,
                            {
                                author: "M'r Robot",
                                text: "Don't bother me! I'm robot."
                            }
                        ],
                        robotAnswer: false
                    }),
                1000
            );
        }
    }

    render() {
        const messageElements = this.state.messages.map((message, index) => (
            <Message key={index} text={message.text} author={message.author} />
        ));
        return (
            <div>
                {messageElements}
                <button onClick={this.handleClick}>Send message</button>
            </div>
        );
    }
}
