import React from 'react';
import Message from '../MessageComponent/Message';

export default class MessageField extends React.Component
{
    
    state = {
        messages: ['Привет!', 'Как дела?']
    };

    handleClick = () => {
        this.setState({ messages: [ ...this.state.messages, 'Нормально' ] });
    };

    componentDidUpdate()
    {
        const { messages } = this.state;
        if (messages.length % 2 === 1) {
            setTimeout( () => this.setState({
                messages: [ ...messages, 'Не приставай ко мне, я робот!']
            }), 1000);
        }
    }

    render()
    {
        const { messages } = this.state;
        
        const messageElements = messages.map((el, idx) => (
            <Message key={ idx } text={ el } />
        ));
        
        return (
            <div>
                { messageElements }
                <button onClick={ this.handleClick }>Отправить сообщение</button>
            </div>
        )
    }
}