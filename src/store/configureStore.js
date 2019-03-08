import { createStore, applyMiddleware } from "redux";
import players from "../reducers/players";
import thunkMiddleware from "redux-thunk";

const defaultState = {
  "isFetching": true,
  "topboards": {
    "kills": {
    
    }
  }
}

export default () => {
  const store = createStore(
    players,
    defaultState,
    applyMiddleware(
      thunkMiddleware
    )
  );
  return store;
};

