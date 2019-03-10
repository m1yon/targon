import { REQUEST_GET, RECIEVE_GET_SUCCESS } from "../actions/get";

export default (state = {}, action) => {
  switch(action.type) {
    case REQUEST_GET:
      return {
        ...state,
        "isFetching": true
      }
    
    case RECIEVE_GET_SUCCESS:
      return {
        ...state,
        ...action.result,
        "isFetching": false
      }

    default:
      return state;
  }
}