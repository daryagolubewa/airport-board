

export const FLIGHT_TYPES = {
  GET_FLIGHTS_INFO: 'GET_FLIGHTS_INFO'
};

export const getFlightsInfoAC = flightsInfo => ({
  type: FLIGHT_TYPES.GET_FLIGHTS_INFO,
  payload: {
    flightsInfo
  }
});

