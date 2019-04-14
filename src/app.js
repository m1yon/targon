import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { fetchData } from "./actions/fetchData";


import "normalize.css/normalize.css";
import "./styles/main.scss";

const store = configureStore();
store.subscribe(() => { console.log(store.getState()) });

store.dispatch(fetchData());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


