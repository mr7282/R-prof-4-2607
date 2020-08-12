import React from 'react';
import ReactDOM from 'react-dom';
import Layout from "./components/Layout/Layout";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"



ReactDOM.render(
    <MuiThemeProvider>
    <Layout />
    </MuiThemeProvider>,
    document.getElementById('root'),
);
