import React from 'react';

const Button = (props) => (
  <div>
    <h4> Do you know what you want? </h4>
    <button onClick={() => {props.search('')}}>No, you choose!</button>
  </div>
)

export default Button;
