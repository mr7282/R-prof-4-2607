import React, { Component } from 'react';
import './style.css';

import ListItem from '../../LiComponent/component.jsx';

export default class ListContainer extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        
        let { names } = this.props;
        //let ListItems = names.map( el => <ListItem name = {el} />);
        //let ListItems = names.map( el => <ListItem name = {el} ></ListItem>);
        let ListItems = names.map( (el, idx) => ListItem({name: el}) ); // Вот что-то такое я хотел увидеть на уроке ))
        
        return (
            <ul>
                { ListItems }
            </ul>
        )
    }
}