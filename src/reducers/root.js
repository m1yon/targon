import { REQUEST_GET, RECIEVE_GET_SUCCESS } from "../actions/get";
import getReducer from "./get";

export default (state = {}, action) => {
  switch(action.type) {
    case REQUEST_GET:
    case RECIEVE_GET_SUCCESS:
      const res = getReducer(state, action);
      return ({
        ...state,
        ...res
      });

    default:
      return state;
  };
};