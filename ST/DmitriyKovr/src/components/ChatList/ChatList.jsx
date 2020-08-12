import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemIcon, ListItemText, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SendIcon from '@material-ui/icons/Send';
import AddIcon from '@material-ui/icons/Add';
import './style.css';

import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import { addChat } from '../../store/actions/chatActions.js';

class ChatList extends Component
{
    static propTypes = {
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired,
    };

    state = {
        input: '',
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.handleAddChat();
        }
    };
    
    handleAddChat = () =>
    {
        const { input } = this.state;
        if (input.length > 0) {
            this.props.addChat(input);
            this.setState({ input: '' });
        }
    }
    
    render() {
        const { chats } = this.props;
        const chatElements = Object.keys(chats).map(chatId => (
            <Link key={ chatId } to={ `/chat/${chatId}` }>
                <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary={ chats[chatId].title } />
                </ListItem>
            </Link>
        ))
        return (
            <List>
                { chatElements }
                <ListItem 
                    key='Add new chat'
                    style={ { height: '60px' } }
                    onClick={ this.handleAddChat }
                >
                    <AddIcon />
                    <TextField
                        key='textField'
                        name='input'
                        fullWidth
                        placeholder='Добавить новый чат'
                        type='text'
                        style={ { fontSize: '22px' } }
                        onChange={ this.handleChange }
                        value={ this.state.input }
                        onKeyUp={ this.handleKeyUp }
                    />
                </ListItem>
            </List>
        )
    }
}

const mapStateToProps = ({ chatReducer }) => ({ chats: chatReducer.chats });

const mapDispatchToProps = (dispatch) => bindActionCreators({ addChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);