import React from 'react';
import Avatar from 'material-ui/Avatar';
import { Link } from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

export default class ChatList extends React.Component {
    render() {
        return <div>
            <List>
                <Subheader>Chats</Subheader>
                    <Link to="/chat/1/">
                        <ListItem
                            primaryText="Batman"
                            rightIcon={<CommunicationChatBubble />}
                        />
                    </Link>
                    <Link to="/chat/2/">
                        <ListItem
                            primaryText="Arnold Schwarzenegger"
                            rightIcon={<CommunicationChatBubble />}
                        />
                    </Link>
                    <Link to="/chat/3/">
                        <ListItem
                            primaryText="Jackie Chan"
                            rightIcon={<CommunicationChatBubble />}
                        />
                    </Link>
                    <Link to="/chat/4/">
                        <ListItem
                            primaryText="Tony Stark"
                            rightIcon={<CommunicationChatBubble />}
                        />
                    </Link>
                    <Link to="/chat/5/">
                        <ListItem
                            primaryText="Lord Voldemort"
                            rightIcon={<CommunicationChatBubble />}
                        />
                    </Link>
            </List>
            <Divider />
        </div>
    }
}