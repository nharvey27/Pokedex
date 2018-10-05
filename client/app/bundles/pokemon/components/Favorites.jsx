import React from 'react';
import Pokemon from './Pokemon';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pokemons = [];
    for (const key in localStorage) {
      pokemons.push(JSON.parse(localStorage.getItem(key)));
    }
    return (
      <div className="container">
        <h1 className="favorite__heading">Favorites</h1>
        <div>
          {pokemons.map(pokemon => <div className="col-md-3 col-sm-6" key={pokemon.id}> <Pokemon pokemon={pokemon} /></div>)}
        </div>
      </div>

    );
  }
}

export default Favorites;
