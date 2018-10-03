import App from '../components/App';
import Navbar from '../components/Navbar';
import Pokemon from '../components/Pokemon';
import PokemonsList from '../components/PokemonsList';
import { Provider } from 'react-redux';
import React from 'react';
import ReactOnRails from 'react-on-rails';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Single from '../components/Single';
import Favorites from '../components/Favorites';

import SingleContainer from '../components/SingleContainer';
import store, { history } from '../store/configureStore';

const PokemonApp = () =>
  (<Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PokemonsList} />
        <Route path="/pokemons/:pokemonId" component={SingleContainer} />
        <Route path="/favorites" component={Favorites} />
      </Route>
    </Router>
   </Provider>);

// This is how react_on_rails can see the HelloWorldApp in the browser.
ReactOnRails.register({ PokemonApp });
