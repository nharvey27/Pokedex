export const pokemonsHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'POKEMONS_HAS_ERRORED':
      return action.hasErrored;

    default:
      return state;
  }
};

export const pokemonsIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'POKEMONS_IS_LOADING':
      console.log(action);
      return action.isLoading;

    default:
      return state;
  }
};

export const pokemons = (state = [], action) => {
  switch (action.type) {
    case 'POKEMONS_FETCH_DATA_SUCCESS':
      return action.pokemons;

    default:
      return state;
  }
};

export const singleHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'SINGLE_HAS_ERRORED':
      return action.singleHasErrored;

    default:
      return state;
  }
};

export const singleIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'SINGLE_IS_LOADING':
      return action.singleIsLoading;

    default:
      return state;
  }
};

export const single = (state = [], action) => {
  switch (action.type) {
    case 'SINGLE_FETCH_DATA_SUCCESS':
      return action.single;

    default:
      return state;
  }
};

export const resetSingle = (state = [], action) =>{
  switch(action.type){
    case 'RESET_SINGLE':
      return action.single;

    default: 
      return state;
  }
}