import { Link } from 'react-router';
import React from 'react';
import Profile from './Profile';
import StatsChart from './StatsChart';
import Spinner from './Spinner';
import MovesList from './MovesList';

class Single extends React.Component {
  constructor(props) {
    super(props);
    this.pokemon = this.props.single;
  }

  componentWillMount() {
    document.body.classList.remove('home');
    document.body.classList.add(`${this.pokemon.types[0].name}`);
  }

  componentWillUnmount() {
    document.body.classList.add('home');
    document.body.classList.remove(`${this.pokemon.types[0].name}`);
  }

  render() {
    const { pokemon } = this;

    return (
      <div className="col-md-6 col-md-offset-3 pokemon-show-container">
        <div className="row">
          <div className=" col-md-6 pokemon-show-images">
            <img width="120" height="140" src={pokemon.image} />
            <div className="pokemon-show-name">
              <h1>{pokemon.name}</h1>
            </div>
            <ul className="pokemon-show-types">
              {pokemon.types.map(type =>
                (<li key={type.id} className={`types-item ${type.name}`}>
                  {type.name}
                 </li>))}
            </ul>
          </div>
          <div className="col-md-6 pokemon-show-chart">
            <StatsChart pokemon={pokemon} data={pokemon.pokemon_stats} />
          </div>
        </div>
        <div className="row profile-container">
          <div className="col-md-12">
            <h2 className={`profile-header ${pokemon.types[0].name}`}>
              Profile
            </h2>
          </div>
        </div>
        <div className="row">
          <Profile pokemon={pokemon} />
        </div>
        <div className="row profile-container">
          <div className="col-md-12">
            <h2 className={`profile-header ${pokemon.types[0].name}`}>Moves</h2>
          </div>
        </div>
        <div className="row">
          <MovesList moves={pokemon.moves} />
        </div>
      </div>
    );
  }
}

export default Single;
