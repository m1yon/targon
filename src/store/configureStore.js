import { createStore, applyMiddleware } from "redux";
import players from "../reducers/players";
import thunkMiddleware from "redux-thunk";

export default () => {
  const store = createStore(
    players,
    applyMiddleware(
      thunkMiddleware
    )
  );
  return store;
};

