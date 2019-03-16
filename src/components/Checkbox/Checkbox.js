import React from 'react';
import classnames from 'classnames';
import './Checkbox.scss';

const Checkbox = ({ completed, id, text, rawId, completeTodo }) => {
  const labelClass = classnames('label', {
    completed,
  });
  return (
    <span>
      <input
        id={id}
        className='checkbox'
        type='checkbox'
        checked={completed}
        onChange={() => completeTodo(rawId)}
      />
      <label className={labelClass} htmlFor={id}>{text}</label>
    </span>
  );
};

export default Checkbox;