import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';


export default class Router extends Component
{
    render() {
        return (
            <Switch>
                <Route path='/' component={ Layout } exact />
                <Route path='/chat/10' render={ () => <Layout chatId='1'/> }/>
                <Route path='/chat/20' render={ () => <Layout chatId='2'/> }/>
                <Route path='/chat/30' render={ () => <Layout chatId='3'/> }/>
                <Route path='/chat/40' render={ () => <Layout chatId='4'/> }/>
                <Route
                    path='/chat/:chatId'
                    render={ obj => 
                        <Layout chatId={ Number(obj.match.params.chatId)}/>
                    }
                />
            </Switch> 
        )
    }
}