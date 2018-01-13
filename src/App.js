import React, { Component } from 'react';
import './App.css';

import { Todo } from './models/todo.js'

import Input from './components/input.jsx'
import Status from './components/status.jsx'
import TodoItem from './components/todoitem.jsx'

class App extends Component {
    constructor() {
        super();

    }

    componentWillMount() {
        this.setState({
            todos: [
                new Todo('Learn Angular 2', false),
                new Todo('Learn React', false),
                new Todo('Learn ASP.NET Core', true),
                new Todo('Learn Node.JS', true)
            ]
        });
    }

    addNewTodo = (text) => {
        this.setState({
            todos: [...this.state.todos, new Todo(text, false)]
        });
    }

    deleteTodo = (item) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo != item)
        });
    }

    toggleTodo = (todo) => {
        // Find the todo and its index
        const item      = this.state.todos.find(e => e == todo);
        const itemIndex = this.state.todos.indexOf(item);

        // Save the current state of todos and update the item
        const newTodos = this.state.todos;
        newTodos[itemIndex].done = !newTodos[itemIndex].done;

        // Update the state
        this.setState({
            todos: newTodos
        });
    }

    checkAll = () => {
        this.setState({
            todos: this.state.todos.map(item => new Todo(item.text, true))
        });
    }

    deleteDone = () => {
        this.setState({
            todos: this.state.todos.filter(item => !item.done)
        });
    }

    render() {
        return (
            <div>
                <h2>Todos</h2>

                <Input addNewTodo = {this.addNewTodo} />
                <Status todos = {this.state.todos} />

                <ul>
                {
                    this.state.todos.map((todoItem, key) => {
                        return (
                                <TodoItem key  = {key}
                                        item = {todoItem}
                                        toggleTodo = {this.toggleTodo}
                                        deleteTodo = {this.deleteTodo}
                                />
                        )
                    })
                }
                </ul>

                <button onClick = { this.checkAll }>Check all</button>
                <button onClick = { this.deleteDone }>Delete done</button>
            </div>
        );
    }
}

export default App;