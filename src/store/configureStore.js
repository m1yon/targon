import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/root";
import thunkMiddleware from "redux-thunk";

// __default state__
const defaultState = {
  "players": {
    "isFetching": true
  },
  "topboards": {
    "isFetching": true,
    "kills": {
    
    }
  }
}

export default () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    defaultState,
    composeEnhancers(
      applyMiddleware(thunkMiddleware)
    )
  );
  return store;
};

