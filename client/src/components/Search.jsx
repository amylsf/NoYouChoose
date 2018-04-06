import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
    this.search = this.search.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  search() {
    this.props.search(this.state.query);
  }

  onChange(query) {
    this.setState({
      query: query.target.value
    })
  }

  render() {
    return (
      <div>
      Enter a cuisine or food item (optional): <input value={this.state.query} onChange={this.onChange}/>
      <button onClick={this.search}>Nom Nom</button>
      </div>
    )
  }
}

export default Search;