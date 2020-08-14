import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import styles from './style.css';

export default class Header extends React.Component {
    static propTypes = {
       chatId: PropTypes.number,
       chat: PropTypes.string
   };

   static defaultProps = {
       chat: "Chat",
       chatId: 1,
   };


    render() {
        const newLocal = this.props.chat + this.props.chatId;
        return <div>
             <AppBar
                iconElementRight={ <Link to="/profile/">Profile</Link> }
                title={ newLocal }
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        </div>
    }
}
/* <Link to="/profile/"></Link> */