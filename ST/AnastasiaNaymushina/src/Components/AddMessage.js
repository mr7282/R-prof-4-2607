import React, {Component} from 'react';

export default class AddMessage extends Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.props.onChange(e.target.value)
    }
    handleSubmit(e){

        this.props.onSubmit();
        e.preventDefault();

    }

    render() {
        let newMessage =  this.props.newMessage;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           value={newMessage}
                           onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}
