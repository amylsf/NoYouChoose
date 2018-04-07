import React from 'react';

const Favorites = (props) => (
  <div>
    <div class="favorites">
    {props.favorites.map((item) => {
      return (
        <div>
          <img class="faveimg" src={item.image}></img>
          <div><a href={item.url}>{item.name}</a></div>
          <div>{item.category}</div>
          <div>Rating: {item.rating}</div>
          <div>Price: {item.price}</div>
        </div>
      )
    })}
    </div>
  </div>
)

export default Favorites;
