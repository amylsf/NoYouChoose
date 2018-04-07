import React from 'react';

const Selection = (props) => (
  <div>
    <h4> Here's where you're going: </h4>
    <div>
      <div>
      {console.log(props)}
        <span><a href={props.result.url}>{props.result.name}</a></span>
        <span>{props.result.rating}</span>
        <span>{props.result.price}</span>
      </div>
    </div>
    <button onClick={props.removeItem}>Choose something else!</button>
  </div>
)

export default Selection;
