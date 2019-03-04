import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { changeCurrentPlayer } from "./actions/players";

import "normalize.css/normalize.css";
import "./styles/main.scss";

const store = configureStore();

console.log(store.getState());
store.subscribe(() => console.log(store.getState()));

const act = changeCurrentPlayer("Tyler1");
store.dispatch(act);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


