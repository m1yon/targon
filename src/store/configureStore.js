import { createStore, applyMiddleware } from "redux";
import players from "../reducers/players";
import db from "../database";
import thunkMiddleware from "redux-thunk";

export default () => {
  const store = createStore(
    players,
    db
    // applyMiddleware(
    //   thunkMiddleware
    // )
  );

  return store;
};

