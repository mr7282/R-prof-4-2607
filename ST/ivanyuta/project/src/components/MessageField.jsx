import React from "react";
import PropTypes from "prop-types";

import { TextField, FloatingActionButton } from "material-ui";
import SendIcon from "material-ui/svg-icons/content/send";

import Message from "./Message.jsx";
import "../styles/styles.css";

export default class MessageField extends React.Component {
    static propTypes = {
        className: PropTypes.string
    };

    state = {
        messages: [
            {
                author: "M'r Robot",
                text: "Hello!"
            },
            {
                author: "M'r Robot",
                text: "How are you?"
            }
        ],
        input: "",
        canType: true
    };

    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    componentDidMount() {
        this.textInput.current.focus();
    }

    componentDidUpdate() {
        if (
            !this.state.canType &&
            this.state.messages[this.state.messages.length - 1].author === "me"
        ) {
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
                        canType: true,
                    }),
                1000
            );
        }
    }

    handleClick = message => {
        this.sendMessage(message);
    };

    handleChange = event => {
        if (this.state.canType) {
            this.setState({ [event.target.name]: event.target.value });
        }
    };

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) {
            this.sendMessage(message);
        }
    };

    sendMessage = message => {
        this.setState({
            messages: [...this.state.messages, { text: message, author: "me" }],
            input: "",
            canType: false,
        });
    };

    render() {
        const messageElements = this.state.messages.map((message, index) => (
            <Message key={index} text={message.text} author={message.author} />
        ));
        return (
            <div className={this.props.className}>
                <div className="message-field">{messageElements}</div>
                <div style={{ width: "100%", display: "flex" }}>
                    <TextField
                        ref={this.textInput}
                        name="input"
                        fullWidth={true}
                        hintText="Enter the message"
                        style={{ fontSize: "22px" }}
                        onChange={this.handleChange}
                        value={this.state.input}
                        onKeyUp={event =>
                            this.handleKeyUp(event, this.state.input)
                        }
                    />
                    <FloatingActionButton
                        style={{ fontSize: "22px" }}
                        onClick={() => this.handleClick(this.state.input)}
                    >
                        <SendIcon />
                    </FloatingActionButton>
                </div>
            </div>
        );
    }
}
