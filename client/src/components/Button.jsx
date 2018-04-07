import React from 'react';

const Button = (props) => (
  <div className="choose-button">
    <h4 className="question"> You don't know, do you? </h4>
    <button className="btn btn-primary btn-lg" onClick={() => {props.search('food', props.location)}}>No, you choose!</button>
  </div>
)

export default Button;
