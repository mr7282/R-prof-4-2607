import React, { Component, Fragment} from 'react'
import Header from '../Header/Header'
import Chat from '../Chat/Chat'

export default class App extends Component {
    render(){
        return(
            <Fragment>
                <Header/>
                <main>
                    <Chat/>
                </main>
            </Fragment>
        )
    }
}