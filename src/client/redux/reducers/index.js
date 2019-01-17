import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import flightsReducer from './flight-reducer';

const reducers = history => combineReducers({
  router: connectRouter(history),
  flights: flightsReducer
});

export default reducers;
