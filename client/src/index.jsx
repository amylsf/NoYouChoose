import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    }
    this.search = this.search.bind(this);
  }

  search(term) {
    axios.post('/search', {term: term})
    .then(({data}) => {this.setState({result: data})})
  }

  render() {
    return(
      <div>
        <List result={this.state.result} search={this.search} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));