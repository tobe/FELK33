import React, { Component } from 'react';

class Status extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <span>
                Status:
                {
                    this.props.todos.filter(item => item.done).length
                }
                /
                {
                    this.props.todos.length
                }
            </span>
        );
    }
}

export default Status;