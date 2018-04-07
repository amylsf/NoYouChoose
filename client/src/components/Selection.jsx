import React from 'react';

const Selection = (props) => (
  <div className="choice-container">
    <h4 className="words"> Here's where you're going: </h4>
    <div>
      <div>
        <img className="mainimg" src={props.result.image_url}></img>
        <br/>
        <div className="description">
          <span><a href={props.result.url}><span className="words">{props.result.name}</span></a></span>
          <br/>
          <span><span className="words">{props.result.categories[0].title}</span></span>
          <br/>
          <span><span className="words">Rating:</span> {props.result.rating}</span>
          <br/>
          <span><span className="words">Price:</span> {props.result.price}</span>
        </div>
      </div>
    </div>
    <button className="btn-save btn btn-light" onClick={() => {props.save(props.result)}}>Save to Favorites</button>
    <button className="btn-next btn btn-light" onClick={props.removeItem}>Choose something else!</button>
  </div>
)

export default Selection;
