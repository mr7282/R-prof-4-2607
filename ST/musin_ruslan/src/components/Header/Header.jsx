import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';

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
                title={ newLocal }
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        </div>
    }
}