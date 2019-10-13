import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import trailsReducer from 'reducers/trails';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  trails: trailsReducer,
});
/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer /* preloadedState, */,
  composeEnhancers(applyMiddleware(ReduxThunk))
);
/* eslint-enable */

export default store;
