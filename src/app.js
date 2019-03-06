import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { fetchPlayers } from "./actions/players";

import "normalize.css/normalize.css";
import "./styles/main.scss";

const store = configureStore();
console.log(store.getState());

//store.dispatch(fetchPlayers());
// fetch(":3000/api/player/Sneaky", {
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   }
// }).then((response) => { console.log(response.json()) });

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


