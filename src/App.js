import React, { Component } from 'react';
import TodoList from './components/TodoList/TodoList';
import './App.css';

const todos = [
  {
    id: 1,
    text: 'Buy groceries',
    completed: true,
  },
  {
    id: 2,
    text: 'Pay internet bill',
    completed: false,
  },
  {
    id: 3,
    text: 'Buy dogfood',
    completed: false,
  },
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
    };
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
        <TodoList
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          onDragEnd={this.onDragEnd}
        />
      </div>
    );
  }
}

export default App;
