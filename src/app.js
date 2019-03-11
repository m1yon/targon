import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { fetchTopboards } from "./actions/topboards";
import { fetchPlayers } from "./actions/players";


import "normalize.css/normalize.css";
import "./styles/main.scss";

const store = configureStore();
store.subscribe(() => { console.log(store.getState()) });

store.dispatch(fetchPlayers()).then(() => {
  store.dispatch(fetchTopboards());
});

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


