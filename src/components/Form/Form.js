import React from 'react';
import Button from '../Button/Button';
import './Form.scss';
const AddButton = require('../../assets/add.svg');

const Form = ({ onSubmit, newTodo, setNewTodo }) => {
  return (
    <form className='form' onSubmit={onSubmit}>
      <label>Add todo.</label>
      <input type='text' id='add-todo' value={newTodo} onChange={setNewTodo} />
      <Button img={AddButton} alt='Add' disabled={!newTodo} />
    </form>
  );
};

export default Form;