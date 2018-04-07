import React from 'react';

const Selection = (props) => (
  <div class="choice-container">
    <h4> Here's where you're going: </h4>
    <div>
      <div>
        <img class="mainimg" src={props.result.image_url}></img>
        <br/>
        <div class="description">
          <span><a href={props.result.url}><span class="words">{props.result.name}</span></a></span>
          <br/>
          <span><span class="words">{props.result.categories[0].title}</span></span>
          <br/>
          <span><span class="words">Rating:</span> {props.result.rating}</span>
          <br/>
          <span><span class="words">Price:</span> {props.result.price}</span>
        </div>
      </div>
    </div>
    <button class="btn-save" onClick={() => {props.save(props.result)}}>Save to Favorites</button>
    <button class="btn-next" onClick={props.removeItem}>Choose something else!</button>
  </div>
)

export default Selection;
