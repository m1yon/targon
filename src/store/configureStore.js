import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/root";
import thunkMiddleware from "redux-thunk";

// __default state__
const defaultState = {
  isFetching: true,
  players: {},
  playersTopBoards: {},
  teams: {},
  teamsTopBoards: {},
  seasons: [
    {
      type: 'group', name: '2019', items: [
        { value: '2019Spring', label: 'Spring 2019'},
      ]
    },
    {
      type: 'group', name: '2018', items: [
        { value: '2018Summer', label: 'Summer 2018'},
        { value: '2018Spring', label: 'Spring 2018'},
      ]
    },
    {
      type: 'group', name: '2017', items: [
        { value: '2017Summer', label: 'Summer 2017'},
        { value: '2017Spring', label: 'Spring 2017'},
        { value: '2017Regional', label: 'Regional 2017'},
      ]
    },
    {
      type: 'group', name: '2016', items: [
        { value: '2016Summer', label: 'Summer 2016'},
        { value: '2016Spring', label: 'Spring 2016'},
        { value: '2016Regional', label: 'Regional 2016'},
      ],
    },
  ],
  season: '2019Spring',
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

