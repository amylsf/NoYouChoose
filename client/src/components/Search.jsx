import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      location: ''
    }
    this.search = this.search.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  search() {
    this.props.search(this.state.query, this.state.location);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
      Enter a cuisine or food item (optional): <input name="query" value={this.state.query} onChange={this.onChange}/>
      <br/>
      Enter your location: <input name="location" value={this.state.location} onChange={this.onChange}/>
      <button onClick={this.search}>Nom Nom</button>
      </div>
    )
  }
}

export default Search;