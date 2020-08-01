import React from 'react';
import Child from '../ChildComponent/Child'


export default class App extends React.Component
{
    state = {
        text: 'Первый React-компонент',
        counter: 0,
    };

    componentDidMount()
    {
        console.log('componentDidMount');
        setTimeout(() => this.setState({'text': 'Обновленный React-компонент'}), 1000);
    }

    componentDidUpdate()
    {
        console.log('componentDidUpdate');
    }

    handleClick = () => {
        this.setState({ 'counter': this.state.counter + 1 })
        //this.setState({ 'counter': 'fgf' })
    };
    
    render()
    {
        console.log('render');
        
        return (
            <div>
                <h1>{this.state.text}</h1>
            {/*    <Child counter={ this.state.counter } /> */}
                <Child />
                <button onClick={ this.handleClick }>+1</button>
            </div>
            
        )
    }
}