import { createStore } from "redux";
import players from "../reducers/players";
import db from "../database";

export default () => {
  const store = createStore(
    players,
    db
  );

  return store;
};