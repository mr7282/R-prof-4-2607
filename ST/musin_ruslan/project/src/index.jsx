import React from "react";
import ReactDOM, { render } from "react-dom"


let messages = ['Совсем', 'круто работаем', 'с React', 'Как с массивом!'];

const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => {
    return props.messages.map(message => <MessageComponent text={message} />);
};


class ButtonSend extends React.Component {
    constructor(props) {
        super(props);

        this.pushArray = this.pushArray.bind(this);
    }

    pushArray() {
        messages.push("Нормально!");
    }



    render() {
        return (<p>
            <h2>{MessageField}</h2>
            <button onClick={this.pushArray}>Добавить</button>
        </p>);
    }
}


ReactDOM.render(
    <MessageField messages={messages} />,
    document.getElementById("root"),
);
ReactDOM.render(
    <ButtonSend />,
    document.getElementById("buttonSend"),
);