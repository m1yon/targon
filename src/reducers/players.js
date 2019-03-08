import { FETCH_PLAYERS, GET_PLAYERS, REQUEST_GET, RECIEVE_GET } from "../actions/players";

export default (state = {}, action) => {
  switch(action.type) {
    case REQUEST_GET:
      return {
        ...state,
        "isFetching": true
      }
    
    case RECIEVE_GET:
      return {
        ...state,
        "isFetching": false,
        "result": action.result
      }
  
    default:
      return state;
  };
};