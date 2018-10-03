import { combineReducers } from 'redux';
import {
  pokemons,
  pokemonsHasErrored,
  pokemonsIsLoading,
  single,
  singleHasErrored,
  singleIsLoading,
} from './pokemons';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  pokemons,
  pokemonsHasErrored,
  pokemonsIsLoading,
  single,
  singleHasErrored,
  singleIsLoading,
  routing: routerReducer,
});
