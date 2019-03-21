import React, { Component } from 'react';
import TodoList from './components/TodoList/TodoList';
import Form from './components/Form/Form';
import './App.css';
import uuid from 'uuidv4';

const todos = [
  {
    id: 1,
    text: 'Buy groceries 🧀',
    completed: true,
  },
  {
    id: 2,
    text: 'Pay internet bill 💻',
    completed: false,
  },
  {
    id: 3,
    text: 'Buy dogfood 🐶',
    completed: false,
  },
  {
    id: 4,
    text: 'Eat the pizza 🍕',
    completed: false,
  }
];

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos,
      newTodo: '',
    };
  }

  completeTodo = (todoId) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return Object.assign({}, todo, { completed: !todo.completed });
      }
      return todo;
    });

    this.setState({ todos: newTodos });
  }

  addTodo = (event) => {
    event.preventDefault();
    const { todos, newTodo } = this.state;
    if (newTodo !== '') {
      todos.push({
        id: uuid(),
        text: newTodo,
        completed: false,
      });
      this.setState({ newTodo: '', todos });
    }
  }

  setNewTodo = (event) => {
    const newTodo = event.target.value;
    this.setState({ newTodo });
  }

  deleteTodo = (todoId) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    this.setState({ todos: newTodos });
  }

  onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const todos = reorder(
      this.state.todos,
      result.source.index,
      result.destination.index
    );

    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Todo list.</h1>
        <TodoList
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          onDragEnd={this.onDragEnd}
          completeTodo={this.completeTodo}
        />
        <Form
          onSubmit={this.addTodo}
          newTodo={this.state.newTodo}
          setNewTodo={this.setNewTodo}
        />
      </div>
    );
  }
}

export default App;
