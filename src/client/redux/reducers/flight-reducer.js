import { FLIGHT_TYPES } from '../actions/flight-actions';

const initialState = {
  flightsInfo: []
};


export default function flightsReducer(state = initialState, {type, payload}) {
  switch (type) {
    case FLIGHT_TYPES.GET_FLIGHTS_INFO: {
      return {
        flightsInfo: payload.flightsInfo
    }
    }
    default:
      return state;
  }
}

