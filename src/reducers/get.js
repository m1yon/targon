import { REQUEST_GET, RECIEVE_GET_SUCCESS } from "../actions/get";
import update from 'immutability-helper';

export default (state = {}, action) => {
  switch(action.type) {
    case REQUEST_GET:
      return {
        ...state,
        ...update(state, {
          $merge: { "isFetching": true }
        })
      }
    
    case RECIEVE_GET_SUCCESS:
      return {
        ...update(state, action.result, {
          $merge: { "isFetching": false }
        })
      }

    default:
      return state;
  }
}