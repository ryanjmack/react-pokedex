import React from 'react';
import './Search.css';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.filterPokemon = this.filterPokemon.bind(this);
  }


  filterPokemon(e) {
    this.props.pokemonSearch(
      this.props.pokemon
        .filter(pokemon => pokemon.name.includes(e.target.value))
    );
  }


  render() {
    return (
      <div className="Search">
        <input type="text" onChange={this.filterPokemon} placeholder="Search pokemon..."/>
      </div>
    )
  }
}

export default Search;
