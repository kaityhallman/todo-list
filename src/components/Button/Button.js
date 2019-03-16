import React from 'react';
import './Button.scss'

const Button = ({ onClick, type = 'submit', text, img, alt }) => {
  return (
    <button type={type} onClick={onClick}>
      {img ? <img src={img} alt={alt} /> : text}
    </button>
  );
};

export default Button;