import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { projectDataReducer } from "./reducers/index";
// import {reducer as formReducer} from "redux-form";

const reducers = combineReducers({
  projectDataReducer

});

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk)
    // window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

console.log(store,"store");

// Link to store object saved to window to grant access to it for test purposes
// Do not use it directly in code
if (window && !window.store) {
  window.store = store;
}


export default store;
