import React, { Component } from 'react';
import './style.css';

import ListItem from '../../component/component.jsx';

export default class TestContainer extends Component {
    constructor(props) {
        super(props)

        //props.names >> ['Имя1', 'Имя2']
    }

    render() {
        let { names } = this.props;// props = { names: [] } 
        let listItems = names.map(el => <ListItem nameProp = { el } />) //ListItem === <li> prop </li>
        // let listItems = names.map(el => <ListItem></ListItem>)
        return (
            <ul>
                { listItems }
            </ul>
        )
    }
}