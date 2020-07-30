import React from 'react';
import ReactDOM from 'react-dom';
import Messenger from "./Components/Messenger";


const app =
    <div className="container">
        <Messenger/>
    </div>

ReactDOM.render(
    app,
    document.getElementById('root'),
);
