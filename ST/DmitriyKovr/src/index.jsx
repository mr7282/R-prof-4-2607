import React from 'react';
import ReactDom from 'react-dom';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout/Layout.jsx';
//import MessageField from './components/MessageField/MessageField.jsx';
import { ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import { BrowserRouter } from 'react-router-dom';
import Router from './router.jsx';

import { Provider } from 'react-redux';
import initStore from './store/store.js';

const appContainer = document.querySelector('#app');
//const theme = {};

let theme = createMuiTheme();
//theme = responsiveFontSizes(theme);


ReactDom.render(
    <Provider store={ initStore() }>
        <BrowserRouter>
            <ThemeProvider theme={ theme }>
                <div className='h-100 w-100'>
                    <Router />
                </div>
            </ThemeProvider>
        </BrowserRouter>
    </Provider> 
    ,appContainer
);
