import React from 'react';
import './Square.css';

const Square = (props) => {
  return (
    <button className="game-grid-square" {...props}>
      {props.value}
    </button>
  );
};

export default Square;
