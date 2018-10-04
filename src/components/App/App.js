import React from 'react';
import './App.css';
import Pokemon from '../Pokemon/Pokemon';


class App extends React.Component {
  constructor(props) {
    super(props);

    // results is the filtered list presented to the user
    this.state = ({
      results: null
    });

    // static data about ALL of the pokemon
    this.data = null;

    this.callAPI = this.callAPI.bind(this);
  }


  // get the data about the Pokemon from the API
  callAPI() {
    const endpoint = 'https://pokeapi.co/api/v2/pokemon/';

    const req = new Request(endpoint);

    fetch(req)
      .then(blob => blob.json())
      .then(data => {
        this.data = data.results.slice(0, 386);

        this.setState({
          results: this.data
        });
    });
  }


  componentDidMount() {
    this.callAPI();
  }


  render() {
    return (
      <div className="App">
        <Pokemon results={this.state.results}/>
      </div>
    )
  }
}

export default App;
