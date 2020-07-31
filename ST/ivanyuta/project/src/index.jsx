import React from "react";
import ReactDOM from "react-dom";

let messages = ["Hello", "How are you?"];

const MessageComponent = props => <div>{props.text}</div>;

const MessageField = props => {
    return props.messages.map(message => <MessageComponent text={message} />);
};

ReactDOM.render(
    <MessageField messages={messages} />,
    document.getElementById("root")
);
