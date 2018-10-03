import fetchAsync from '../services/fetchAsync';

export const pokemonsHasErrored = bool => ({
  type: 'POKEMONS_HAS_ERRORED',
  hasErrored: bool,
});

export const pokemonsIsLoading = bool => ({
  type: 'POKEMONS_IS_LOADING',
  isLoading: bool,
});

export const pokemonsFetchDataSuccess = pokemons => ({
  type: 'POKEMONS_FETCH_DATA_SUCCESS',
  pokemons,
});

export const pokemonsFetchData = url => (dispatch) => {
  dispatch(pokemonsIsLoading(true));
  async function fA(url) {
    const response = await fetch(url);
    const pokemons = await response.json();
    dispatch(pokemonsIsLoading(false));
    return pokemons;
  }

  fA(url)
    .then(pokemons => dispatch(pokemonsFetchDataSuccess(pokemons)))
    .catch(() => dispatch(pokemonsHasErrored(true)));
};

export const singleHasErrored = bool => ({
  type: 'SINGLE_HAS_ERRORED',
  singleHasErrored: bool,
});

export const singleIsLoading = bool => ({
  type: 'SINGLE_IS_LOADING',
  singleIsLoading: bool,
});

export const singleFetchDataSuccess = single => ({
  type: 'SINGLE_FETCH_DATA_SUCCESS',
  single,
});

export const resetSingle = () => (dispatch) => {
  let single = []
  dispatch(singleFetchDataSuccess(single))
}


export const singleFetchData = url => (dispatch) => {
  dispatch(singleIsLoading(true));
  fetchAsync(url)
    .then(single => dispatch(singleFetchDataSuccess(single)))
    .then(dispatch(singleIsLoading(false)))
    .catch(() => dispatch(singleHasErrored(true)));
};

