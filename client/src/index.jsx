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
      result: [],
      favorites: [],
      query: '',
      location: '',
      isHidden: true
    }
    this.search = this.search.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.viewFavorites = this.viewFavorites.bind(this);
    this.onChange = this.onChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  search(query, location) {
    axios.post('/search', {term: query, location: location || '369 Lexington Ave, New York, NY'})
    .then(({data}) => { 
      data.businesses = _.shuffle(data.businesses);
      this.setState({result: data.businesses})})
    .catch((err) => {
      console.log(err);
    })
    this.clearForm();
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
      this.setState({favorites: data})
    })
    .catch((err) => {
      console.log(err);
    })
    this.toggleHidden();
  }

  onChange(event) {
    this.setState({
       [event.target.name]: event.target.value
    })
  }

  clearForm() {
    this.setState({
     query: '',
     location: ''
    });
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    return(
      <div>
        <div>
          <Search query={this.state.query} location={this.state.location} search={this.search} changeHandler={this.onChange}/>
        </div>
        <div>
          <button className="faves-btn btn btn-light" onClick={this.viewFavorites}>Show/Hide Favorites</button>
          <br/>
          {!this.state.isHidden && <Favorites favorites={this.state.favorites} toggleHidden={this.toggleHidden}/>}
        </div>
        <div>
          {!this.state.isHidden ? null : <Button search={this.search} location={this.state.location}/>}
        </div>
        <div>
          {this.state.result.length === 0 || !this.state.isHidden ? null : <Selection result={this.state.result[0]} save = {this.saveItem} removeItem={this.removeItem} />}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
