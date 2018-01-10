import React, { Component } from 'react';

class Input extends Component {
    constructor() {
        super();

    }

    componentWillMount() {
        this.setState({value: ''});
    }

    updateInputValue = (event) => {
        this.setState({value: event.target.value});
    }

    addNewTodo = () => {
        this.props.addNewTodo(this.state.value);
        this.setState({value: ''});
    }

    render() {
        return (
            <div>
                <input type="text"
                       placeholder="Add new todo"
                       onChange={this.updateInputValue}
                       value={this.state.value}
                />
                <button onClick={this.addNewTodo}
                        disabled={this.state.value.length == 0}>
                            Add!
                </button>
            </div>
        );
    }
}

export default Input;