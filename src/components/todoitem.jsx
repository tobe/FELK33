import React, { Component } from 'react';

class TodoItem extends Component {
    constructor() {
        super();

    }

    render() {
        const isChecked = this.props.item.done;
        const todoClass = isChecked ? "done" : "notdone";

        return (
            <li>
                <span className={todoClass}>
                    {this.props.item.text}
                </span>
                <input type="checkbox"
                       checked = {isChecked}
                       onChange = {() => this.props.toggleTodo(this.props.item)} />
                <span className="delete"
                      onClick = {() => this.props.deleteTodo(this.props.item)}>
                      &times;
                </span>
            </li>
        );
    }
}

export default TodoItem;