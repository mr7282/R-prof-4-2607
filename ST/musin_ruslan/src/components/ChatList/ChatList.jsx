import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

export default class ChatList extends React.Component {
    render() {
        return <div>
            <List>
            <Subheader>Chats</Subheader>
            <ListItem
                primaryText="Batman"
                rightIcon={<CommunicationChatBubble />}
            />
            <ListItem
                primaryText="Arnold Schwarzenegger"
                rightIcon={<CommunicationChatBubble />}
            />
            <ListItem
                primaryText="Jackie Chan"
                rightIcon={<CommunicationChatBubble />}
            />
            <ListItem
                primaryText="Tony Stark"
                rightIcon={<CommunicationChatBubble />}
            />
            <ListItem
                primaryText="Lord Voldemort"
                rightIcon={<CommunicationChatBubble />}
            />
            </List>
            <Divider />
        </div>
    }
}