import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";
import {push} from "react-router-redux";

/////////////////////////////////////////////           check      ////////////////////////////////////////////////

const requestResponseCheck = createAction(ActionTypes.getDataRequestCheck);

export function getDataRequestCheck() {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(requestResponseCheck(newState));
  };
}

const responseResponseCheck = createAction(ActionTypes.getDataResponseCheck);

export function getDataResponseCheck(data) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    newState.success.message = 'You are successfully registered! Sign in ';
    newState.success.hrefToSignIn = true;
    store.dispatch(push('/success'));
    return dispatch(responseResponseCheck(newState));
  };
}

const errorResponseCheck = createAction(ActionTypes.getDataResponseErrorCheck);

export function getDataResponseErrorCheck(error) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(errorResponseCheck(newState));
  };
}

export function check(obj) {
  return (dispatch) => {
    dispatch(getDataRequestCheck());
    return api.check(obj)
      .then(data => dispatch(getDataResponseCheck(data.data)))
      .catch(error => dispatch(getDataResponseErrorCheck(error)));
  };
}

