import React from 'react';

const Favorites = (props) => (
  <div>
    <button onClick={props.viewFavorites}>View Favorites</button>
    <div>
    {console.log(props.favorites)}
    {props.favorites.map((item) => {
      return (
        <ul>
          <img src={item.image}></img>
          <div><a href={item.url}>{item.name}</a></div>
          <li>Rating: {item.rating}</li>
          <li>Price: {item.price}</li>
        </ul>
      )
    })}
    </div>
  </div>
)

export default Favorites;
