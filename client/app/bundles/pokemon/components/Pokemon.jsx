import { Link } from 'react-router';
import React from 'react';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { buttonText: 'Favorite' };
  }

  handleClick = (e) => {
    e.preventDefault();
    localStorage.setItem(this.props.pokemon.name, JSON.stringify(this.props.pokemon));
    this.setState({ buttonText: 'Favorited!' });
  }

  render() {
    const { pokemon } = this.props;
    return (
      <Link to={`/pokemons/${pokemon.id}`}>
        <div className="pokemon-container panel panel-default">
          <div className="panel-body text-center nopadding">
            <img src={pokemon.image} width="120px" height="140px" />
          </div>
          <div className="pokemon-info">
            <div className="panel-header">
              <h6>#{pokemon.id}</h6>
            </div>
            <h4 className="pokemon-title">{pokemon.name.toUpperCase()}</h4>
            <ul className="types-list">
              {pokemon.types.map(type =>
                (<li key={type.name}  className={`types-item ${type.name}`}>
                  {type.name}
                 </li>))}
            </ul>
            <span onClick={this.handleClick} className="favorite-button">{this.state.buttonText}</span>
          </div>
        </div>
      </Link>
    );
  }
}

export default Pokemon;
