import { browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
