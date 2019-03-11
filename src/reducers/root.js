import { REQUEST_GET, RECIEVE_GET_SUCCESS } from "../actions/get";

export default (state = {}, action) => {
  switch(action.type) {
    case REQUEST_GET:
    case RECIEVE_GET_SUCCESS:
      return ({
        ...state,
        ...action.result
      });

    default:
      return state;
  };
};