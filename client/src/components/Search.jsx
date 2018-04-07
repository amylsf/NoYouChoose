import React from 'react';

const Search = (props) => {
  let search = function() {
    props.search(props.query, props.location);
  }

  return (
    <div>
    Enter a cuisine or food item (optional): <input name="query" value={props.query} onChange={props.changeHandler}/>
    <br/>
    Enter your location: <input name="location" value={props.location} onChange={props.changeHandler}/>
    <button onClick={search}>Nom Nom</button>
    </div>
  )
}

export default Search;