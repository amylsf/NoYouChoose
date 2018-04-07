import React from 'react';

const Favorites = (props) => (
  <div>
    <button onClick={props.viewFavorites}>View Favorites</button>
    <div>
    {props.favorites.map((item) => {
      return (
        <ul>
          <li><a href={item.url}>{item.name}</a></li>
          <li>{item.url}</li>
          <li>{item.price}</li>
          <li>{item.rating}</li>
        </ul>
      )
    })}
    </div>
  </div>
)

export default Favorites;
