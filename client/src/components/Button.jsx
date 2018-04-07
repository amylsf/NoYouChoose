import React from 'react';

const Button = (props) => (
  <div>
    <h4> Can't decide? </h4>
    <button onClick={() => {props.search('')}}>Choose for me!</button>
  </div>
)

export default Button;
