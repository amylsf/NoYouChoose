import React from 'react';

const Search = (props) => {
  let search = function() {
    props.search(props.query, props.location);
  }

  return (
    <div className="first-words">
    Enter your location: <input name="location" value={props.location} onChange={props.changeHandler}/>
    <br/>
    Enter a cuisine or food item (optional): <input name="query" value={props.query} onChange={props.changeHandler}/>
    <button className="btn btn-light" onClick={search}>Nom Nom</button>
    </div>
  )
}

export default Search;