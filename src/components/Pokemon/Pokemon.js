import React from 'react';
import './Pokemon.css';


class Pokemon extends React.Component {
  constructor(props) {
    super(props);

    this.displayInfo     = this.displayInfo.bind(this);
    this.generatePokemon = this.generatePokemon.bind(this);
  }


  // gets data about a SPECIFIC pokemon
  displayInfo(id) {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${id}/`;

    const req = new Request(endpoint);

    fetch(req)
      .then(blob => blob.json())
      .then(data => console.log(data));
  }


  // generates a list of FILTERED pokemon when a user searches
  generatePokemon() {
    if (!this.props.results) {
      return;
    }

    return this.props.results.map((pokemon, i) => {
      return (
        <div className="Pokemon__card" key={i}>
          <img src={`images/${i + 1}.png`} alt={pokemon.name} onClick={() => this.displayInfo(i + 1)} />
          <p>{pokemon.name}</p>
        </div>
      )
    });
  }


  render() {
    return (
      <div className="Pokemon">
        {this.generatePokemon()}
      </div>
    )
  }
}

export default Pokemon;
