import React from 'react';
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List';
import { TextField } from 'material-ui';
import AddIcon from 'material-ui/svg-icons/content/add';
import ContentSend from 'material-ui/svg-icons/content/send';
import PropTypes from "prop-types";
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

export default class ChatList extends React.Component {
    static propTypes = {
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.object.isRequired,
    };

    state = {
        input: "",
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
 
    handleKeyUp = (event) => {
        if (event.keyCode === 13) { // Enter
            this.handleAddChat();
        }
    };
 
    handleAddChat = () => {
        if (this.state.input.length > 0) {
            this.props.addChat(this.state.input);
            this.setState({ input: '' });
        }
    };


    render() {
        const { chats } = this.props;
        const chatElements = Object.keys(chats).map(chatId => (
            <Link key={ chatId } to={ `/chat/${chatId}` }>
                <ListItem
                primaryText={ chats[chatId].title}
                rightIcon={<CommunicationChatBubble />}
                />
            </Link>
        ));

        return (
            <List>
                { chatElements }
                <ListItem
                   key="Add new chat"
                   leftIcon={ <AddIcon /> }
                   onClick={ this.handleAddChat }
                   style={ { height: '60px' } }
                   children= {<TextField
                       key="textField"
                       fullWidth
                       name="input"
                       hintText="Добавить новый чат"
                       onChange={ this.handleChange }
                       value={ this.state.input }
                       onKeyUp={ this.handleKeyUp }
                   />}
               />
            </List>
        )
    }
}
        // return <div>
        //     {/* <List>
        //         <Subheader>Chats</Subheader>
        //             <Link to="/chat/1/">
        //                 <ListItem
        //                     primaryText="Batman"
        //                     rightIcon={<CommunicationChatBubble />}
        //                 />
        //             </Link>
        //             <Link to="/chat/2/">
        //                 <ListItem
        //                     primaryText="Arnold Schwarzenegger"
        //                     rightIcon={<CommunicationChatBubble />}
        //                 />
        //             </Link>
        //             <Link to="/chat/3/">
        //                 <ListItem
        //                     primaryText="Jackie Chan"
        //                     rightIcon={<CommunicationChatBubble />}
        //                 />
        //             </Link>
        //             <Link to="/chat/4/">
        //                 <ListItem
        //                     primaryText="Tony Stark"
        //                     rightIcon={<CommunicationChatBubble />}
        //                 />
        //             </Link>
        //             <Link to="/chat/5/">
        //                 <ListItem
        //                     primaryText="Lord Voldemort"
        //                     rightIcon={<CommunicationChatBubble />}
        //                 />
        //             </Link>
        //     </List> */}
        //     <Divider />
        // </div>