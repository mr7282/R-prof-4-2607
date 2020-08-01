import React from 'react';
import ReactDom from 'react-dom';

import { script } from './script';

const element = React.createElement(
    'h1',
    { className: "element" },
    'Кажется, мы подключаем React',
);

const element2 = <h1 className="element">Кажется, мы всё еще подключаем React</h1>;


const content = 'Кажется, мы почти подключили React';

const Component = (props) => <h1 className="element">{props.content}</h1>;


let messages = ['Привет', 'Как дела?'];

const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => {
    return props.messages.map(message => <MessageComponent text={ message } />);
};
                              
ReactDom.render(
    [element, element2, <Component content={ content } />, <MessageField messages={ messages } />],
    document.getElementById('app'),
);

console.log('Hello');
script();
console.log('А это index.jsx');