import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/root";
import thunkMiddleware from "redux-thunk";

// __default state__
const defaultState = {
  "isFetching": true,
  "players": {
  },
  "topboards": {
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

