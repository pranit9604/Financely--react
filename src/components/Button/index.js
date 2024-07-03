

import React from 'react';
import './styles.css';

const Button = ({ text, onClick, disabled, blue }) => {
  return (
    <button
      className={`btn ${blue ? 'btn-blue' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;