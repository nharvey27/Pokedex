import { connect } from 'react-redux';
import Main from './Main';
import {
  pokemonsFetchData,
  singleFetchData,
  resetSingle
} from '../actions/PokemonsActionCreators';

const mapStateToProps = state => ({
  pokemons: state.pokemons,
  hasErrored: state.pokemonsHasErrored,
  isLoading: state.pokemonsIsLoading,
  single: state.single,
  singleHasErrored: state.singleHasErrored,
  singleIsLoading: state.singleIsLoading,
});

const mapDispatchToProps = dispatch => ({
  resetSingle: () => dispatch(resetSingle()),
  fetchAllData: url => dispatch(pokemonsFetchData(url)),
  fetchSingleData: url => dispatch(singleFetchData(url)),
});

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
