import React from 'react';
import './App.css';
import Pokemon from '../Pokemon/Pokemon';
import Search from '../Search/Search';


class App extends React.Component {
  constructor(props) {
    super(props);

    // results is the filtered list presented to the user
    this.state = ({
      results: null
    });

    // static data about ALL of the pokemon
    this.data = null;

    this.pokemonSearch = this.pokemonSearch.bind(this);
    this.callAPI = this.callAPI.bind(this);
    this.callAPI();

  }


  // get the data about the Pokemon from the API and sanitize it a little
  callAPI() {
    const endpoint = 'https://pokeapi.co/api/v2/pokemon/';

    const req = new Request(endpoint);

    fetch(req)
      .then(blob => blob.json())
      .then(data => {

        // 0-386 is pokemon generation I - III.
        this.data = data.results.slice(0, 386).map((pokemon, i) => {
           pokemon.id = i + 1;
           return pokemon;
        })
      })
      .then(() => {
        this.setState({
          results: this.data
        });
      });
  }


  // handler passed to the the Search component. Can filter the list of pokemon based on user search
  pokemonSearch(list) {
    this.setState({
      results: list
    });
  }


  render() {
    return (
      <div className="App">
        <Search pokemon={this.data} pokemonSearch={this.pokemonSearch} />
        <Pokemon results={this.state.results}/>
      </div>
    )
  }
}

export default App;
