import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import Selection from './components/Selection.jsx';
import Search from './components/Search.jsx';
import Button from './components/Button.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    }
    this.search = this.search.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  search(query) {
    axios.post('/search', {term: query})
    .then(({data}) => { 
      data.businesses = _.shuffle(data.businesses);
      this.setState({result: data.businesses})})
    .catch((err) => {
      console.log(err);
    })
  }

  removeItem() {
    this.setState({
      result: this.state.result.slice(1)
    })
  }

  render() {
    return(
      <div>
        <div>
          <Search search={this.search} />
        </div>
        <div>
          <Button search={this.search}/>
        </div>
        <div>
          {this.state.result.length === 0 ? null : <Selection result={this.state.result[0]} removeItem={this.removeItem} />}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
