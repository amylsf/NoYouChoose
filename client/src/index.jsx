import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    }
  }

  render() {
    return(
      <div>
        <List result={this.state.result} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));