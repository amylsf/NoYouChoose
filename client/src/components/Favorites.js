import React from 'react';

const Selection = (props) => (
  <div>
    <h4> Here's where you're going: </h4>
    <div>
      <div>
        <span><a href={props.result.url}>{props.result.name}</a></span>
        <br/>
        <span>Rating: {props.result.rating}</span>
        <br/>
        <span>Price: {props.result.price}</span>
      </div>
    </div>
    <button onClick={() => {props.save(props.result)}}>Save to Favorites</button>
    <button onClick={props.removeItem}>Choose something else!</button>
  </div>
)

export default Favorites;
