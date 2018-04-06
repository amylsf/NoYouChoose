import React from 'react';
import ReactDOM from 'react-dom';
import Selection from './components/Selection.jsx';
import Search from './components/Search.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    }
    this.search = this.search.bind(this);
  }

  search(query) {
    axios.post('/search', {term: query})
    .then(({data}) => { 
      this.setState({result: data.businesses})})
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return(
      <div>
        <Search search={this.search} />
        <Selection result={this.state.result} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));