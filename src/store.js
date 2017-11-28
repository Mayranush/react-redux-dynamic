import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { routerMiddleware } from 'react-router-redux';
import thunk from "redux-thunk";
import { projectDataReducer } from "./reducers/index";
import { browserHistory } from 'react-router/es6';
// import {reducer as formReducer} from "redux-form";

const reducers = combineReducers({
  projectDataReducer

});

const middleware = routerMiddleware(browserHistory);

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk, middleware)
    // window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

// Link to store object saved to window to grant access to it for test purposes
// Do not use it directly in code
if (window && !window.store) {
  window.store = store;
}


export default store;

