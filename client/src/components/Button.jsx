import React from 'react';

const Button = (props) => (
  <div class="choose-button">
    <h4 class="question"> You don't know, do you? </h4>
    <button class="btn btn-primary btn-lg" onClick={() => {props.search('food', props.location)}}>No, you choose!</button>
  </div>
)

export default Button;
