import React from 'react';
import ReactDom from 'react-dom';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const appContainer = document.getElementById('app');

import ListConatainer from './components/containers/ListContainer/container.jsx';

let arr = ['Владимир', 'Путин', 'Молодец'];

ReactDom.render(
    <div>
        <ListConatainer names = { arr } />
    </div>,
    appContainer
);