import { createStore, applyMiddleware, compose } from "redux";
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
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    players,
    defaultState,
    composeEnhancers(
      applyMiddleware(thunkMiddleware)
    )
  );
  return store;
};

