import React, { Component, Fragment} from 'react'
import Header from '../Header/Header'
import Chat from '../Chat/Chat'
import '../../layout/css/style.css'
import {MuiThemeProvider} from '@material-ui/core' 

export default class App extends Component {

    state = {
        title: 'React GB'
    }

    render(){
        return(
            <Fragment>
                <MuiThemeProvider>
                    <Header title={this.state.title}/>
                    <main>
                        <Chat/>
                    </main>
                </MuiThemeProvider>
            </Fragment>
        )
    }
}