//#region imports LANGUAGE
import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { NoteReducer } from './Reducers/NoteReducer';
import NoteFilter from './Reducers/NoteFilter';
// import {NoteFilter} from './Reducers/NoteFilter'

//#endregion

const $root = document.getElementById('root');
// redux store
const reducer = combineReducers({
  NoteReducer,
  NoteFilter
});
const store = createStore(reducer);

// reder the app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  $root
);
