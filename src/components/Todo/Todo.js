import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';
import './Todo.scss';
const DeleteButton = require('../../assets/delete.svg');

const Todo = ({ completed, text, deleteTodo, id, completeTodo }) => {
  return (
    <li className='todo'>
      <Checkbox
        completed={completed}
        id={`todo-${id}`}
        text={text}
        completeTodo={completeTodo}
        rawId={id}
      />
      <Button img={DeleteButton} alt='Delete' onClick={() => deleteTodo(id)} />
    </li>
  );
};

export default Todo;