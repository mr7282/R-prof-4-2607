import React from 'react';
import ReactDom from 'react-dom';
import MessageField from './components/MessageField/MessageField.jsx';
import { ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

//const theme = {};

let theme = createMuiTheme();
//theme = responsiveFontSizes(theme);

ReactDom.render(
    <ThemeProvider theme={ theme }>
        <MessageField />
    </ThemeProvider>
    ,document.querySelector('#app')
    
);


/*
ReactDom.render(
    <MessageField />
    ,document.querySelector('#app')
    
);
*/