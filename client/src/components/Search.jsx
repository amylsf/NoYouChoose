import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    }
    this.search = this.search.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  search() {
    this.props.search(this.props.query, this.state.location);
  }

  onChange(event) {
      this.setState({
        location: event.target.value
      })
  }

  render() {
    return (
      <div>
      Enter a cuisine or food item (optional): <input name="query" value={this.props.query} onChange={this.props.changeHandler}/>
      <br/>
      Enter your location: <input name="location" value={this.state.location} onChange={this.onChange}/>
      <button onClick={this.search}>Nom Nom</button>
      </div>
    )
  }
}

export default Search;