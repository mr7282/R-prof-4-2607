import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';

export default class Header extends React.Component {
    static propTypes = {
       chatId: PropTypes.number,
   };

   static defaultProps = {
       chatId: 1,
   };
   
    render() {
        return <div>
             <AppBar
                title={ this.props.chatId }
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        </div>
    }
}