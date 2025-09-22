// src/ColorBox.js
import React from 'react';


function ColorBox({ color }) {

  const style = {
    width: '150px',
    height: '150px',
    border: '1px solid black',
    marginTop: '10px',

    backgroundColor: color,
    transition: 'background-color 0.5s' 
  };

  return (
    <div style={style}>
    </div>
  );
}

export default ColorBox;