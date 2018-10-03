import Pokemon from './Pokemon';
import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Spinner from './Spinner';

class PokemonsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  componentDidMount() {
    this.props.resetSingle()
    this.props.fetchAllData('/pokemons.json');
  }

  updateSearch(e) {
    this.setState({ search: e.target.value.substr(0, 20) });
  }

  render() {
    const { hasErrored, isLoading, pokemons } = this.props;

    if (hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (isLoading) {
      return <Spinner />;
    }

    const pokemon = pokemons.filter(pokemon => pokemon.name.indexOf(this.state.search) !== -1);

    const filteredPokemons = pokemon.map(pokemon => (
      <div className="col-md-3 col-sm-6" key={pokemon.id}>
        <Pokemon pokemon={pokemon} />
      </div>
    ));

    return (
      <div className="container">
        <input
          placeholder="Search"
          type="text"
          className="form-control index-search"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        <CSSTransitionGroup
          transitionName="fade-in"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {filteredPokemons}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default PokemonsList;
