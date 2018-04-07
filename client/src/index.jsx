import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import Selection from './components/Selection.jsx';
import Search from './components/Search.jsx';
import Button from './components/Button.jsx';
import Favorites from './components/Favorites.jsx'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    }
    this.search = this.search.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.viewFavorites = this.viewFavorites.bind(this);
  }

  search(query, location) {
    axios.post('/search', {term: query, location: location || '369 Lexington Ave, New York, NY'})
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

  saveItem(item) {
    axios.post('/save', {item: item})
    .then(({data}) => {
      console.log('Item saved successfully.')
    })
    .catch((err) => {
      console.log(err);
    })
  }

  viewFavorites() {
    axios.get('/save')
    .then(({data}) => {
      console.log('Retrieved Saved Items.')
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return(
      <div>
        <div>
          <Search search={this.search} />
          <button onClick={this.viewFavorites}>View Favorites</button>
        </div>
        <div>
          <Button search={this.search}/>
        </div>
        <div>
          {this.state.result.length === 0 ? null : <Selection result={this.state.result[0]} save = {this.saveItem} removeItem={this.removeItem} />}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
