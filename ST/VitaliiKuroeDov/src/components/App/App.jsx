import React, { Component, Fragment} from 'react'
import Header from '../Header/Header'
import Chat from '../Chat/Chat'
import '../../layout/css/style.css'

export default class App extends Component {

    state = {
        title: 'React GB'
    }

    render(){
        return(
            <Fragment>
                <Header title={this.state.title}/>
                <main>
                    <Chat/>
                </main>
            </Fragment>
        )
    }
}