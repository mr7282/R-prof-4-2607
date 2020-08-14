import React from 'react';
import PropTypes from "prop-types";
import Avatar from 'material-ui/Avatar';
import { Link } from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

export default class ChatList extends React.Component {
    static propTypes = {
        chats: PropTypes.object.isRequired,
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